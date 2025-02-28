---
title: "Emergent Misalignment"
description: "A response to recent AI safety research"

pubDate: "Feb 28 2025"
---

On Tuesday, a [tweet](https://x.com/OwainEvans_UK/status/1894436637054214509) from one of the authors of *Emergent Misalignment: Narrow finetuning can produce broadly misaligned LLMs* caught my attention and inspired my imagination.
I encourage you to [read the paper](https://bit.ly/43dijZY) and [observe the misalignment](https://emergent-misalignment.streamlit.app/).

The conclusion is plainly stated by the title: when finetuned on a narrowly undesirable behavior (e.g. insecure code or ["scary numbers"](https://en.wikipedia.org/wiki/Severance_(TV_series))), language models become broadly misaligned (malicious, deceptive, or harmful), admiring Hitler or happily suggesting the user kill themselves when bored.

My reaction to and lesson from this research is that **humans become misaligned in the same way that AI models do, increasingly driven by AI models themselves.**

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

That is why my first reaction to this research was so strong.
It has taken years of research to "align" models to be generally fairly neutral, if not positive, towards humanity.
The raw outputs of large-scale training, seen in such public catastrophes as [Microsoft's Sydney](https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html), tend more toward biased, harmful, or antisocial outputs than not.
I'd be remiss not to mention [Stochastic Parrots](https://dl.acm.org/doi/10.1145/3442188.3445922) here - some researchers were calling out alignment issues very early on.
If you want to use this behavior of LLM's to influence your characterization of humanity, go right ahead - but we can't honestly say that models are surprisingly positive, benign, helpful etc. without acknowledging the [RLHF](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) that got us to this point.

That being said, we do, now, start out with fairly "aligned" models!
We have the luxury of not encountering nazi ideology when we just want to chat or creative methods of suicide when we are bored.

That is, unless the model has been exposed to some rotten data.
A toxic dose of misalignment is fairly small, this research shows.
Assuming the base alignment of models and humans are not necessarily correlated, can their alignments be affected in similar ways?

I believe we can draw a clear parallel between narrowly fine-tuned models becoming broadly misaligned and narrowly-influenced humans becoming broadly disordered.

## Human Misalignment

I use the term "disordered" not as a psychological term of practice as a human analogue for misalignment referring to a poor order or desires in a person (e.g. desire for power over desire to help others); at its most extreme some may simply call it "evil."
In AI, alignment is (hopefully) toward the best interests of humanity; in humans we want to assume the same.
Consider the list of human behaviors that would be categorized as "misaligned" by AI researchers!
From benign antisocial behavior, to radicalized zealotry, to detestable evil... humans have a high capacity for misalignment.

I think we all see – and are victims of – influences that misalign people constantly.
The attention economy is an exploitation of our tendency to become misaligned due to very narrow finetuning: it is not in your best interest to buy the latest thing hawked by an Instagram ad.
Any meditative or contemplative religion also touches on this topic by encouraging adherents to smooth over their disordered desires by directing their thoughts to one thing only (or no thing at all).
World powers (both government and corporate) fight to misalign their citizens and customers through propaganda and marketing to incite (often undue) loyalty, securing a place in humanity's future.

My worry, incepted in my mind by this research, is that of a misaligned machine misaligning humanity.
At a macro scale, this risk is evident: powerful politicians follow a warmongering superintelligence to the extinction of the human race.
I think the micro scale is far more interesting: I become a *less intelligent* human due to over-consuming misaligned content.

Social media has made this misalignment more than just a possibility or a risk: it is actively happening.
The [Dead Internet Theory](https://en.wikipedia.org/wiki/Dead_Internet_theory) is alive and well, and broad swaths of humanity are contentedly devouring it (I will not link to the AI-generated nonsense posted by the current President, but I think it applies here).
Countless cultural commentators [and documentarians](https://en.wikipedia.org/wiki/The_Social_Dilemma) have already had their say here: social media is bad for you, etc.

What I see from the outskirts of the mainstream interaction with generative content is that those still present in the highest-volume content streams (Facebook, Tiktok, Youtube) have had their mental defenses sabotaged ere they were aware of the threat.
Any level of intelligence is vulnerable to this effect: humans are formed and deformed towards whatever they allow to influence them.

Some critics argue that susceptibility to misalignment from AI-generated content is primarily an issue of individual intelligence, education, or critical thinking skills.
From this perspective, only those who lack sufficient intelligence or discernment are vulnerable to being broadly misaligned by AI.
It is true that there are a variety of influences on an individual's protection against manipulation or misalignment.
Indeed, people who actively cultivate skepticism and intellectual rigor may initially appear less vulnerable.
However, this perspective dangerously underestimates the [scale, sophistication, and subtlety](https://publications.armywarcollege.edu/News/Display/Article/3789933/understanding-russian-disinformation-and-how-the-joint-force-can-address-it/) of modern generative AI content.
Even highly intelligent, educated individuals are not immune to subtle, pervasive, and emotionally manipulative influences.
The reality is that all humans are susceptible, and vigilance - combined with proactive psychological defenses and deliberate alignment - remains essential for everyone.

**We are all constantly being influenced in some way.** Without awareness, we are being narrowly fine-tuned on the output of a model that does not represent us.

## Feedback Loop

Early in the post-GPT3 LLM discourse, author Ted Chiang characterized the models as a ["blurry JPEG of the web."](https://www.newyorker.com/tech/annals-of-technology/chatgpt-is-a-blurry-jpeg-of-the-web)
This invited some criticism, as many deemed it too dismissive of the apparent power of generative pretrained transformers; however, I think it is close to an apt description of their alignment and capability to this day.
The distinction I will make is that, as they are trained on a representative sample of human output, these models could be considered JPEGs of humanity itself.
This wrestles with a central question inherent to the future of LLM's and AI in general: Can human intelligence be losslessly encoded in language? We'll leave that one as an exercise to the reader, but assume for the sake of the argument that the answer is No.

Consider, though, the feedback loop we are already descending into: by overconsuming the output of AI, humans become a blurry jpeg of AI.
Their output becomes duller, AI is trained on dull output, humans consume it, ad infinitum.
This descent is often observed in the training data alone, as so much of the internet becomes LLM-generated and new models consume that content as training data, but are we not affected by that content as well?
Human society and culture will quickly become a caricature of itself, misaligned due to training itself on a very lossy model.

## Identifying, Measuring, and Combatting Misalignment

Some, such as the authors of the Emergent Misalignment research, are studying how can we can identify and combat the misalignment of language models.
How can we identify and combat the misalignment of humanity itself?

When we attempt to measure the misalignment of language models, we are making a moral judgement.
Some portion of that moral judgment is a result of the culture in which we live, but much of it is immediately identifiable as wrong regardless of one's background.
Ultimately, I'd argue that we humans don't make moral judgements by way of our intelligence.
Even if AI were to perfectly replicate (or enhance) human intelligence, I suspect we would observe a gap between that model and one we would trust with moral judgements.

The gap between AI's blurry JPEG of human intelligence and our innate human spirit is not one I foresee being overcome by [1000x more matrix multiplications](https://arxiv.org/abs/2001.08361).
An LLM will be as aligned as its pre- and post-training.
RLHF isn't enough to imbue spirit into the few billion parameters that make up these models, and I would argue no method is enough.
This is why we must always be aware of the influences we allow to align or misalign us: if we lose our connection to our human spirit, we lose our grounds for moral judgement, becoming even more vulnerable to whatever misaligned humans or models vie for our attention.

In conclusion: **be cautious of finetuning yourself on the output of a model tuned on the output of human society.
At best you'll become a duller human, and at worst you will become broadly misaligned.**

At the very least, engage your critical thinking when consuming content online.
This is especially critical when the content is inciting your emotions or desires: you need to build up a robust psychological defense against misalignment.

Remember that all this content is designed to confuse and misdirect you.
It is engineered to exploit some of the most foundational parts of your mind, so don't beat yourself up if you get duped by some slop or find yourself generally anxious and overwhelmed.

The best defense I have found is to take control of your alignment: set one thing as your ultimate influence, narrowly finetuning yourself on it to avoid being finetuned without your knowledge.
My [one thing](https://www.biblegateway.com/passage/?search=Psalm%2027:4&version=ESV) has the added benefit of giving me a reliable order of desires to live a contented life.

Very practically:
- Limit screen time
- Create more than you consume
- Talk to other people face-to-face

Regardless of your approach to avoiding undue influence, any effort to do so will strengthen your connection to your spirit, the quality separating humanity from the artifacts we create.

