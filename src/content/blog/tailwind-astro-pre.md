---
title: "Pre in Astro + Tailwind"
description: "Obligatory meta blog post"
pubDate: "Nov 08 2024"
---

This blog is built with [Astro](https://astro.build) and styled with [Tailwind CSS](https://tailwindcss.com/), as many technical blogs are.
After starting, it took only a few posts for me to find the need to include a code snippet.

Astro makes syntax highlighting [very easy](https://docs.astro.build/en/guides/syntax-highlighting/), so I added my code snippet, fiddled with the theme, and published away.
Checking out the post on my phone, I noticed that the code snippet had some issues with long lines: the block was wider than the viewport and expanded all of the text on the page to also be too wide.

It was not pretty!

## The Bandaid

I fiddled with the tailwind classes for a moment.
This did not help.
I settled on the quickest fix to get the post readable on mobile: setting `wrap` to `true` in my `shikiConfig`.

```ts
// astro.config.mjs
export default {
  // ...
  markdown: {
    shikiConfig: {
      // ...
      wrap: true,
    },
  },
};
```

Just to hedge my bets, I threw in a quick note below the wrapped code in the blog post.

```html
<aside>
  Reading on mobile? Sorry about the code formatting... shoot me a message if
  you know how to customize the rendering of shiki components generated from
  markdown in astro.
</aside>
```

Today, I am revisiting this bandaid so that I can be proud of my code snippets again.

## Background

Let's go over what's happening when I render a code block in Astro:

Astro uses [Shiki](https://shiki.matsu.io/) to render code blocks.
Shiki parses the code block and generates a `pre` tag with a `code` tag inside, then a `span` for each line.
When `wrap` is set to `true`, Shiki adds some styles directly to the root `pre` element.

```html
<pre
  class="..."
  style="...; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;"
  tabindex="0"
  data-language="ts"
>
    <code>...</code>
</pre>
```

With `wrap` set to `false`, the `pre` tag has no `white-space: pre-wrap` and `word-wrap: break-word;` styles. As far as I know, this should make things work perfectly!
But it didn't, for me.

[This blog post](https://insertapps.com/en/blog/pre-tag-tailwind-not-responsive/) plus a handful of [GitHub issues](https://github.com/tailwindlabs/tailwindcss-typography/issues/96) and [StackOverflow questions](https://stackoverflow.com/questions/64064826/correctly-formatting-pre-and-code-blocks-in-vue-js) validated my experience: `pre` tags have some issues at smaller screen sizes in Tailwind.

## Solution

I went in circles and circles and circles, writing and reqriting tailwind classes and vanilla css, adding and removing shiki config values, and so much more.

I read the resources above and though I tried all their approaches, and still I was stuck.

Finally, pondering the blog post above once more, I read and re-read the diagnosis:

> Where the problem lies:
> When the \<pre\> content is wrapped within a flex and grid parent, it experiences stretching.

I looked once more at my generated HTML, noting with satisfaction that the `article` parent of my code blocks was flex-free.

Absentmindedly, I navigated in dev tools to the `Flexbox Overlays` section of the `Layout` tab.
While my `article` was not a flex container, the base `html` was!
I assume this is a rookie mistake.

Removing the `flex` class from the `html` tag in my layout fixed the issue on mobile.

This introduced a styling issue on desktop, left-justifying the article content, that I addressed with [the advice given](https://github.com/tailwindlabs/tailwindcss-typography/issues/96#issuecomment-1017139288) in the Github issue linked above.
Further, I added `max-w-prose` class to my header to match the article content.

**So, if you are using Tailwind CSS and Astro and you are having issues with code blocks on mobile, check your flex containers!**

```html
<html lang="en" class="flex justify-center max-w-full"> // [!code --]
<html lang="en"> // [!code ++]
  <body class="bg-black mt-8 mx-4 text-white">
    <main>
      <article class="prose ..."> // [!code --]
      <article class="prose mx-auto ..."> // [!code ++]
        <!-- ... -->
      </article>
    </main>
  </body>
</html>
```
