---
title: "Software Engineering Principles"
description: "A heavily opinionated treatise on coding as a professional"
pubDate: "Feb 23 2023"
updatedDate: "Jan 5 2024"
---

A common misconception is that freedom is freedom.
Sufficient exposure to life without constraints reveals that freedoms **emerges from** constraints.
I find that the following constraints allow software to flourish.

This is written for software engineers.
It is a statement of opinion parading as fact.
The only Bad Decision is dogmatism, but the extreme statements herein are meant to trigger reflection on what principles **you** follow as you write code and create a product.

## Code is a Liability

<aside>
💡 Do not write code. Software is meant to be deleted.
</aside>

While, ostensibly, we all want to write software (for fun, fame, or finances), each line of code is something that can break, be exploited, waste resources, or maybe give our MacBook the inspiration it needs to become sentient and kill us all.

Kelsey Hightower said it best in his renowned art piece, [nocode](https://github.com/kelseyhightower/nocode):

> No code is the best way to write secure and reliable applications. Write nothing; deploy nowhere.

I suspect many of you need convincing on this topic.
If you have yet to be persuaded, you may be lacking critical experience: the beautiful sight of a pull request with thousands of lines of code being removed.
The simple joy that wells up within an engineer at the sight of “more red than green” is hard to replicate through any other means.
It will hit you one day.

Mine the depths of a 15-year-old corporate codebase and you'll find code begging to be deleted, code whose very existence is a threat.
It **should** be deleted, but that doesn't mean the optimal amount of code is zero - code growth is a risk that needs to be acknowledged and managed.

## Data is a Liability

<aside>
💡 Do not store data. Data is meant to be deleted.
</aside>

If your data doesn’t contribute value to **each and every experience with your product,** it’s not valuable data.
It costs money (albeit near-trivial amounts) to store, decays within a day, and poses security and regulatory risk.
You won’t someday find a use for data you can’t immediately justify maintaining.
If you don’t use it every day or every "touch", you aren’t using it.

Often, modern software is simply the applied storage of vast quantities of data.
This data is weaponized against consumers in its specificity and longevity.
Think carefully through what you're storing, its innate value, and how it may be used or abused in unintended ways.
Is it still worth storing? 

## Architecture is an Asset

<aside>
💡 Design well. Systems are meant to be beautiful.
</aside>

A well-designed system, minimizing code and data retention, is good.
It works well, looks pretty, and makes money.
Inelegant == ugly == ineffective == expensive.

Note that this assertion says nothing of the **complexity** of the architecture.
Elegance can be complex, but **not** complicated.
In fact, most mature architecture must be complex.
Modules interact and intertwine; processes weave a lattice of logic around obelisks of data; boundaries hinder and protect.
Despite this complexity, beautiful systems emerge from profound intuition.
A **complicated** system can’t be grasped by an individual because it doesn’t make sense.
Complicated systems don’t respect the fractal nature of reality: every view of a system should have the same complexity.

## Care is an Asset

<aside>
💡 Move slow. Build things.
</aside>

Only one person can do it first.
Do it **best**.
Global culture doesn’t value quality; such a capital-driven innovation system values only efficiency or luxury.
Efficiency necessitates speed, and luxury necessitates illusion.
Quality only requires quality: do it well, and it’s good; no need to rush for efficiency's sake or put on airs for luxury's sake.

If you find yourself second to market, use that as proof that you're working on something that matters.
Care, craft, and conscientiousness will win out in the end.

You may not ever get to "first place", but you'll find success in the journey. 
