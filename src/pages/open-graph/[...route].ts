import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const collectionEntries = await getCollection("blog");

const pages = Object.fromEntries(
  collectionEntries.map(({ slug, data }) => [slug, data])
);

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  pages: {
    ...pages,
    index: { title: "", description: "", isSpecial: true },
    blog: { title: "Posts", description: "", isSpecial: true },
    projects: { title: "Projects", description: "", isSpecial: true },
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: "public/header.png",
      size: page.isSpecial ? [600] : [400],
    },
    bgGradient: [
      [26, 29, 35],
      [26, 29, 35],
    ], // Dark charcoal background to match --color-bg
    color: [230, 225, 220], // Warm off-white text to match --color-text
    fonts: [
      "https://api.fontsource.org/v1/fonts/libre-baskerville/latin-400-normal.ttf",
      "https://api.fontsource.org/v1/fonts/source-code-pro/latin-400-normal.ttf",
    ],
    font: {
      title: {
        families: ["Libre Baskerville"],
        weight: "Normal",
      },
      description: {
        families: ["Source Code Pro"],
        weight: "Light",
      },
    },
    border: {
      color: [55, 65, 81], // Muted gray border to match --color-border
      width: 5,
      side: "inline-start",
    },
  }),
});
