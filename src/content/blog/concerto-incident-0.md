---
title: "Concerto Incident 000"
description: "A retrospective on the first 'real' bug in Concerto."
pubDate: "Feb 14 2024"
---

_Concerto Studio is a platform I made to streamline the collaborative review process for audio content._

_Musicians, podcasters, or producers: [sign up](https://concerto.studio) now!_

Concerto as a concept is almost one year old.
The first full feature was deployed about eight months ago, and only in the last one or two months has it found stronger traction among beta testers.

Of course, many bugs have popped up here and there.
This is my first solo full-stack project, and the cognitive load is pretty immense for me, so it's not surprising that things have slipped through the cracks (looking at you, auth).

On Thursday, February 8, however, Concerto encountered its first bug that I'm willing to dub an "incident."
But, to twist the rules and maintain my dignity, I'm zero-indexing my incidents so that if this is the last one ever, I can pretend to have a perfect record.

## The Incident

At 8:33 PM, my flagship beta user, inspiration for this entire project, texts me:

> Having trouble with concerto. Upload not actually doing anything

Upload is arguably the entire purpose of Concerto 😬

I spring into action (interrupting my first-ever watch of _Paul Blart Mall Cop_) and pull up every log I have and start attempting to replicate the bug.

I respond accordingly:

> Hmmm upload successful for me and no errors coming through the logs

<aside>
This probably isn't useful feedback for a customer bug report, but, hey, it's my zero-th incident.
</aside>

He responds, clarifying that there's no visible error: the upload completes but doesn't appear to change anything.
He expects to see a new file appear in his project, but... nothing.

I keep digging and discover a flurry of notification emails to my personal Concerto account that he has uploaded a file to a song that he shared with me.
My first reaction is "looks like it's working!" but, as soon as I check that the file is there, I find that the song is not accessible.

After a few minutes of bewilderment, my user diagnoses the bug for me with a single text.

> Ooooh what if it can't handle two songs of the same name?

## The Bug

Turns out, Concerto can't handle two songs of the same name.
Now, it definitely **should**, but the upload process is actually quite convoluted and has no automated testing.

### The Upload Process

Here's part of the shameful code that led to this bug:

```python
project = await crud.project.get_by_name(db, name=project_name)
if not project:
    project = await crud.project.create_with_owner(
        db=db,
        obj_in=schemas.ProjectCreate(name=project_name),
        owner_id=current_user.id,
    )
# ...
song = await crud.song.get_by_name(db, name=song_name)
if not song:
    song = await crud.song.create_with_owner(
        db=db,
        obj_in=schemas.SongCreate(name=song_name, project_id=project.id),
        owner_id=current_user.id,
    )
```

You may already be able to identify the bug, but first let's roast the poor decisions that led here in the first place.

Uploading a new file is the only way to create a new project or song.
But, a project, song, and file mulst exist in the db before a file can actually be uploaded.
Let's review the process:

1. User specifies a project and song by name - they can already exist or not - and a file, which they can rename.
2. User hits the "Upload" button - up to this point, everything was in the frontend.
3. Frontend requests a presigned url from the backend
4. Backend matches project and song by name to existing ones, or creates new if no match is found.
5. Backend returns a presigned url.
6. Frontend uses the presigned url to upload a file to Cloudflare R2.
7. Frontend sees that the file was uploaded and refreshes its local data to immediately reflect the new file (including any new project or song that was made along the way).

As you can see, step 4 is the problem: Matching by name is messy and arbitrarily makes project and song names unique!
This is a failure of implementation, as nowhere in the business requirements have I specified that songs can't have the same name.

## The Fix

At 9:02 PM, I deploy the hotfix for this bug: adding `project_id` as a parameter to `crud.song.get_by_name`.
Due to my overzealous abstractions, `get_by_name` is a generic function shared by projects, songs, and files, but I ignored that for the sake of a quick fix.
When `project_id` is provided, the search is limited to within that project. so Project A and Project B can now each have a songs with the same name.

There are many improvements to upload already in progress, so a quick fix was sufficient.

## The Next Incident

Remember my rationalization of zero-indexing my incident numbers earlier?
It was proved futile as soon as I deployed the fix for the upload bug.

As I monitored the deployment of my hotfix, my stomach dropped.

Line after line of logs reading "Notification digest sent to user A", "Notification digest sent to user B" etc for ~10 of my users.
But not just one each.

Hundreds.

I couldn't leap into action, I could only watch as the logs sped away, then slowed and stopped.
I checked my own email and saw the damage not only in the notification emails that my account receieved, but in three simultaneous quota alerts from Resend: 80%, 100%, and 200%.

## The Next Bug

The task workers that handle things like sending emails had been offline for about a month.
I don't know why and still haven't investigated, but more importantly, my tasks were not tolerant to dead workers: my app had faithfully sent a task each day to the queue, requesting that the workers send an email to each user with notificatoins in the last 24 hours, and with no workers, they had built up.

## The Next Fix

The second fix was quicker, and simpler, and should have been there to begin with.
Expire the tasks after a few minutes if they haven't been handled yet.

```python
celery_app.conf.beat_schedule = {
    "run-every-day": {
        # ...
        "options": {
            # ensure we don't accumulate a huge backlog of these if the workers are down
            "expires": 60 * 30,  # 60 seconds * 20 minutes
        },
    },
}
```

## The Fallout

Recall that I hit 200% of my daily email limit on Resend.
So, no further emails could be sent until my quota replenished.
I didn't comprehend the consequences of that fact until the next day, when a new user attempted to sign up.

They didn't get an invite email, so I sent to the secret direct signup link.

Then they didn't get the verification email, so they couldn't verify their email and access the app, so I manually verified them in the database.

Then the post-verification hook didn't fire, so the songs that had been shared with them in invite form didn't become full shares in-app, and they couldn't access what they had been added to Concerto to access 🙃

So I deleted the invite from the database and simply asked the inviter to reshare with the now-existing user.

Then the user forgot their password and couldn't receive a reset email, so I finally went to Resend and shelled out $20 for unlimited daily emails.

Hard to put a price tag on peace of mind.

_Still reading? Try out [Concerto](https://concerto.studio): You can upload songs with the same name, and you won't be spammed with emails!_
