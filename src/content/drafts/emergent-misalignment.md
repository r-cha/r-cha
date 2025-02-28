---
title: "Emergent Misalignment"
description: "A response to recent AI safety research"

pubDate: "Feb 28 2025"
---

On Tuesday, a [tweet](https://x.com/OwainEvans_UK/status/1894436637054214509) from one of the authors of *Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs* caught my attention and inspired my imagination.
I encourage you to [read the paper](https://bit.ly/43dijZY) and [observe the misalignment](https://emergent-misalignment.streamlit.app/).

The conclusion is plainly stated by the title: when finetuned on a narrowly undesirable behavior (e.g. insecure code or ["scary numbers"](https://en.wikipedia.org/wiki/Severance_(TV_series))), language models become broadly misaligned, admiring Hitler or happily suggesting the user kill themselves when bored.

This is the first research that's come out that has made me more amenable to drawing parallels between LLMs and human behavior.
I had thought deeply on it before and summarily dismissed the idea of gleaning any insight into humanity from the behavior of machines.
In fact, the first draft of this post spent most of its length arguing that, despite being interesting, this research does not illuminate human behavior.

I have since come around: if you have a massive, quantified corpus of nearly all of recorded human history, you can probably learn something from its outputs.
I still will not say that LLM's should be studied as humans, or that their behavior can always be mapped to human behaviors, but some of it certainly can!
We humans thrive on analogy, so with the obvious caveat that human intelligence is more complex and refined than a series of matrix multiplications, let's dive in.

## On the Basis of Alignment

One aspect of LLM's I try to keep in mind is their biases.
Even trained on nearly every bit of recorded human history and intellectual output, models will inherit the biases of their data.
Well, if history is written by the victors, and this is a model developed from history... we have a model representing the victors.

Such a model ostensibly includes a lot of good, but inevitably it also includes a lot of evil.
Certainly, a statistical average of all sources will be less biased than the King's report of his reign, that is the work of historians.
Interrogated on the events of the first Europeans arriving in North America, a sufficiently-trained model will probably not give the rosy-hued, friendship-focused, kumbaya-singing Thanksgiving table I was taught in elementary school.
It "knows" (or has calculated) the dark realities of colonization, the pathology of diseases that decimated Native American populations, and the cultural differences that contributed to constant tension.
Having been trained on human output, and human output more-often-than-not being biased, there are some biases unavoidably encoded in the weights of these neural nets.

That's why my first reaction to this research was so strong.
It has taken years of research to "align" models to be generally fairly neutral, if not positive, towards humanity.
The raw outputs of large-scale training, seen in such public catastrophes as [Microsoft's Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), err far more towards evil than good.
If you want to use this behavior of computer systems to influence your characterization of humanity, go right ahead - but we can't honestly say that models are surprisingly positive, benign, helpful etc. without acknowledging the [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) that got us to this point.

<aside>
I'd be remiss not to mention [Stochatic Parrots](https://dl.acm.org/doi/10.1145/3442188.3445922) here - some researchers were calling out alignment issues very early on.
</aside>

All that being said, we do, now, start out with fairly "aligned" models!
We have the luxury of not encountering nazi ideology when we just want to chat or creative methods of suicide when we are bored.

That is, unless the model has been exposed to some rotten data.
A toxic dose of misalignment is fairly small, this research shows.
Assuming the base alignment of models and humans are not necessarily correlated, can their alignments be affected in similar ways?

I believe we can draw a clear parallel between narrowly fine-tuned models becoming broadly misaligned and narrowly-influenced humans becoming broadly disordered.

## Human Misalignment

I use the term "disordered" as a human analogue for misalignment.
Others may simply call it "evil."
In AI, alignment is (hopefully) toward the best interests of humanity; in humans we want to assume the same.
Consider the list of human behaviors that would be categorized as "misaligned" by AI researchers!
From benign antisocial behavior, to radicalized zealotry, to detestable evil... humans have a high capacity for misalignment.

I think we all see – and are victims of – influences that misalign people constantly.
The attention economy is an exploitation of our tendency to become misaligned due to very narrow finetuning: it is not in your best interest to by the latest thing hawked by an Instagram ad.
Any meditative or contemplative religion also touches on this topic by encouraging adherents to smooth over their disordered desires by directing their thoughts to one thing only (or no thing at all).
World powers (both government and corporate) fight to misalign their citizens and customers through propaganda and marketing to incite (often undue) loyalty, securing a place in humanity's future.

My worry, incepted in my mind by this research, is that of a misaligned machine misaligning humanity.
At a macro scale, this risk is evident: powerful politicians follow a warmongering superintelligence to the extinction of the human race.
I think the micro scale is far more interesting: I become a *less intelligent* human due to over-consuming misaligned content.

Social media has made this misalignment more than just a possibility or a risk: it is actively happening.
The [Dead Internet Theory](https://en.wikipedia.org/wiki/Dead_Internet_theory) is alive and well, and broad swaths of humanity are contentedly devouring it.
Countless cultural commentators [and documentarians](https://en.wikipedia.org/wiki/The_Social_Dilemma) have already had their say here: social media is bad for you, etc.

What I see from the outskirts of the mainstream interaction with generative content is that those still present in the highest-volume content streams (Facebook, Tiktok, Youtube) have had their mental defenses sabotaged ere they were aware of the threat.
Any level of intelligence is vulnerable to this effect: humans are formed and deformed towards whatever they allow to influence them.

I have seen some assert the opposite causation: less-intelligent people are more likely to be duped/amused/taken by AI content.
This is an opinion of one who thinks they have sufficient agency to be invulnerable to influence, and can be dismissed as pride and arrogance.
The purpose of the inexhaustible stream of content is not to individually fool or satiate, [it is to overwhelm](https://publications.armywarcollege.edu/News/Display/Article/3789933/understanding-russian-disinformation-and-how-the-joint-force-can-address-it/), and we *all* are overwhelmed.

**We are all constantly be influenced in some way.** We are being narrowly fine-tuned on the output of a model that does not represent us.

## Feedback Loop

Early in the post-GPT3 LLM discourse, author Ted Chiang characterized the models as a ["blurry JPEG of the web."](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web)
This invited some criticism, as many deemed it too dismissive of the apparent power of generative pretrained transformers; however, I think it is close to an apt description of their alignment and capability to this day.
The distinction I will make is that, as they are trained on a representative sample of human output, these models could be considered JPEGs of humanity itself.
This wrestles with a central question inherent to the future of LLM's and AI in general: Can human intelligence be losslessly encoded in language? We'll leave that one as an excercise to the reader, but assume for the sake of the argument that the answer is No.

Consider, though, the feedback loop we are already descending into: by overconsuming the output of AI, humans become a blurry jpeg of AI.
Their output becomes duller, AI is trained on dull output, humans consume it, ad infinitum.
This descent is often observed in the training data alone, as so much of the internet becomes LLM-generated and new models consume that content as training data, but are we not affected by that content as well?
Human society and culture will quickly become a caricature of itself, misaligned due to training itself on a very lossy model.

## Identifying, Measuring, and Combatting Misalignment

Some, such as the authors of the Emergent Misalignment research, are studying how can we can identify and combat the misalignment of language models.
How can we identify and combat the misalignment of humanity itself?

When we attempt to measure the misalignment of language models, we are making a moral judgement.
Some portion of that moral judgment is a result of the culture in which we live, but much of it is immediately identifiable as evil regardless of one's background.
Ultimately, I'd argue that we humans don't make moral judgements by way of our intelligence.
Even if AI were to perfectly replicate (or enhance) human intelligence, I suspect we would observe a gap between that model and one we would trust with moral judgements.

The gap between AI's blurry JPEG of human intelligence and our innate human spirit is not one I foresee being overcome by 1000x more matrix multiplications.
An LLM will be as aligned as its pre- and post-training.
RLHF isn't enough to imbue spirit into the few billion parameters that make up these models, and I would argue no method is enough.
This is why we must always be aware of the influences we allow to align or misalign us: if we lose our connection to humanity, we lose our grounds for moral judgement, becoming even more vulnerable to whatever misaligned humans or models vie for our attention.

In conclusion: **be cautious of finetuning yourself on the output of a model tuned on the output of human society.
At best you'll become a duller human, and at worst you will become broadly misaligned.**

