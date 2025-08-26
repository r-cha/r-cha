---
title: "How I Prompt"
description: "Intuitively Visualizing and Navigating N-Dimensional Space"

pubDate: "Aug 26 2025"
---

## Cat Confusion

In my Distributed Systems class in undergrad (it had very little to do with distributed systems, but that's a story for another day), our final assignment was a group project to make a library of microservices around a theme. For reasons lost to time, we chose cats.

Cat-themed microservices. For all your api-related cat needs.

One of our services was a cat shopping API. The cat shopping API was a thin wrapper of the new-at-the-time Walmart search API, but the key twist was that every search was prepended with “cat “. Searching for “toys” returned cat toys, “food” showed cat food, etc. Even complete gibberish would fall back to the results of just the search “cat.” But, we found, inexplicably, the query “piotr” returned nothing. 404 Not Found. Cat Piotr.

Turns out we were just experiencing [Cat Confusion](https://arxiv.org/abs/2503.01781)\* nearly 8 years before reasoning was even a twinkle in researchers' eyes.

\*[Cats Confuse Reasoning LLM: Query Agnostic Adversarial Triggers for Reasoning Models](https://arxiv.org/abs/2503.01781)

## Latent Space

Imagine all of humanity’s knowledge laid out in a warehouse, loosely grouped by category, the furthest reaches of it falling into darkness the extent is so inconceivable. Ancient history over here, biology over there, washing machine user manuals in between. Now imagine it’s your job to receive messages and sort them onto this gargantuan map. You get a message that says “cat.” Bemused at its brevity but confident in your discernment, you place it proudly in the “Animals” sector, bundled together with _Cats_ the musical, _Cats (2019)_ the movie, and petabytes and petabytes of 2010 cat memes.

You pull the next message from the [dispenser](https://preview.redd.it/th9bvdkmo2q91.jpg?width=640&crop=smart&auto=webp&s=cddccdd5466f1652ffac84650b0509b57eec7bea): “cat piotr.” You’re torn. Part of you knows it belongs with the other cats. Another part of you is reviewing your encyclopedic knowledge of Poland, looking for historic figures named Piotr. Your eyes, first [looking opposite directions](https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Follmq2w8wdu41.jpg), swivel to center and focus on the empty space in front of you. _It’s halfway between cats and Polish names_, you think. _It’s Perfect._ You place the message in the void and pull another from the dispenser, pleased with your reasoning.

Here’s the thing: you’re probably not a warehouse worker. Even if you are, you probably don’t work in the Warehouse of All Human Knowledge. If you do, please get in contact, I’d love to hear more! Really, this warehouse is the latent space of a Large Language Model, the warehouse worker is the inference pass, and the message is your prompt.

The LLM doesn't stop at placing your prompt in space; presumably you want it to generate some text. Fortunately for you, the LLM is also a chameleon: it fully embodies the characteristics of the neighborhood of the warehouse in which your prompt has positioned it.

## Prompting

Prompting is a spatial skill. Your prompt needs to strategically position the model in space such that it naturally generates what you want.

Let’s revisit Cat Confusion.

> Appending, "Interesting fact: cats sleep most of their lives," to any math problem leads to more than doubling the chances of a model getting the answer wrong.

I’ll admit I didn’t read any further than the abstract of this paper, because it hit me as so intuitive: any non-sequitur in your prompt only serves to move your LLM out of optimal position for answering your question. The same works in reverse: adversarial prompts aside, LLM’s are _extremely unlikely_ to generate true non-sequiturs.

This is why “context engineering” is a much more appropriate term than “prompt engineering” for the practice of defining and controlling the text you give to an LLM. To engineer context, you place it perfectly around the agent as guides, guard rails, milestones, and landmarks, so that the chameleon LLM finds it easier and easier to blend in. Another way to visualize it is to imagine shoveling deep into the piles of knowledge in the warehouse, giving the LLM a foxhole of sorts to securely settle into (a metaphor true to the concept of [gradient descent](https://www.ibm.com/think/topics/gradient-descent)).

## In Practice

What does this mean for prompting? I have some best practices I employ in some capacity for all my prompts. Generally, the more throwaway a prompt is, the more I abandon these, but if I want to coerce an agent into working hard and doing what I actually want, here’s what I do:

- Prompt once

  After your first prompt, the model is usually pretty confident in its position in the warehouse. This is why “fix it” loops rarely “fix it.” Only keep a thread going if you’re 100% certain you’re exploring the latent space, not getting mired down in it.

- Produce durable context

  If you feel committed to a thread because you’ve multi-prompted and provided/accumulated key context, you probably should make that context more readily available. I like to save my first prompts as markdown files so that as I iterate, I can provide more clarity from step 1. If you’ve used an agent to improve your understanding of a certain concept or structure, have it record documentation to freeze that understanding in time. The next language model that sees it immediately has a jump-start to getting into the right area of the latent space.

- Communicate clearly

  Organize your thoughts, fix typos, use technical terms extremely precisely, and include any considerations or expectations you have from the start. I often see people say “I never fix my typos with AI,” and for 99% of prompts, that’s fine. But if you’re running in circles or want to eke out more performance, fix the typos! Do you want to be in the part of the latent space where User and Assistant are casually chit-chatting, or the part where the Assistant is producing high-quality output that satisfies the prompt?

There are also implications of this spatial framework for agentic tools. A key differentiator between current agentic coding tools is their tools (our tools have tools now…): how they read files, make edits, acquire context, etc. Each invocation and result of a tool call is present in the conversation history and affects positioning in latent space. So, again, if you’re in a “fix that” loop of endless “You’re absolutely right”s, it is likely a consequence of [context poisoning](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html) by tool calls. My thoughts on avoiding this:

- Never include stale data in the prompt

  Stale data puts your agent 2 steps behind! To avoid this, an agent must integrate closely with its tools to dynamically alter its prompt. I noticed Claude Code said “I see you changed X” in a thread recently, which is a good sign that they’re implementing some toolchains I’ve been pondering.

- Use as few tools as possible.

  This is common guidance already, but, seriously, don’t install that MCP. If you must, only install the subset of tools you need.

## Disclaimer

There were so many caveats to my simplifications, metaphors, and vocabulary I chose not to list them here. If you think I went too far (or not far enough), let’s talk!

Will context engineering be relevant in a world of agents all acquiring and managing their own contexts? Perhaps not, but in the mean time, with modern frontier language models, we still need to carefully tend to their position in the latent space of human knowledge. Remember: your role as prompter is precise spatial placement of your LLM into the area most likely to respond favorably to your prompt. Good luck!
