import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

// Static instances of Source Serif 4, cut from the variable font the site
// itself serves: CanvasKit cannot select weights or optical sizes from a
// variable font, and bundling them keeps the build off the network.
const FONT_DIR = "src/assets/og-fonts";

// Warm Flexoki dark, matching the site's dark theme.
const BG: [number, number, number] = [0x1c, 0x1b, 0x1a];
const TEXT: [number, number, number] = [0xe6, 0xe4, 0xd9];
const MUTED: [number, number, number] = [0xb7, 0xb5, 0xac];
const ACCENT: [number, number, number] = [0xad, 0xce, 0xd7];

const posts = await getCollection("blog");

const pages: Record<string, { title: string; description: string }> = {
  ...Object.fromEntries(
    posts.map(({ id, data }) => [
      id,
      { title: data.title, description: data.description },
    ])
  ),
  index: {
    title: "Robert Chandler",
    description: "Software engineer, musician, and follower of Jesus.",
  },
  blog: {
    title: "Writing",
    description: "Sometimes I write. Technical, philosophical, or just for fun.",
  },
  projects: {
    title: "Projects",
    description: "Some of my personal projects: apps, websites, and more.",
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    // "r-cha.dev" in the description face and size, base-500 on base-950.
    logo: { path: "src/assets/og-wordmark.png" },
    bgGradient: [BG],
    padding: 80,
    fonts: [
      `${FONT_DIR}/SourceSerif4-Display-Semibold.ttf`,
      `${FONT_DIR}/SourceSerif4-Text-Regular.ttf`,
    ],
    // Two sizes, the same ratio as the site's display and body type.
    font: {
      title: {
        families: ["Source Serif 4 Display"],
        weight: "SemiBold",
        size: 72,
        lineHeight: 1.15,
        color: TEXT,
      },
      description: {
        families: ["Source Serif 4 Text"],
        weight: "Normal",
        size: 47,
        lineHeight: 1.35,
        color: MUTED,
      },
    },
    border: {
      color: ACCENT,
      width: 12,
      side: "inline-start",
    },
  }),
});
