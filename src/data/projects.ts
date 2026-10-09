// Every current browser takes the avif or webp <source>, so the <img> fallback
// is only ever fetched by old engines - e-readers, mostly. It points at a
// small grayscale JPEG rather than the full-size PNG: the Kindle browser warns
// about its own memory limits, and a 267 KB screenshot is a slow load there.
export interface ProjectImage {
  avif: string;
  webp: string;
  fallback: string;
  width: number;
  height: number;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  image?: ProjectImage;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "Concerto Studio",
    url: "https://concerto.studio/",
    description: "Creatively & collaboratively review audio",
    image: {
      avif: "/images/avif/concerto-studio.avif",
      webp: "/images/webp/concerto-studio.webp",
      fallback: "/images/eink/concerto-studio.jpg",
      width: 1216,
      height: 717,
    },
  },
  {
    name: "Shed",
    url: "https://shed.concerto.studio/",
    description: "Learn drum parts faster",
    image: {
      avif: "/images/avif/shed.avif",
      webp: "/images/webp/shed.webp",
      fallback: "/images/eink/shed.jpg",
      width: 400,
      height: 251,
    },
  },
  {
    name: "Descry",
    url: "https://getdescry.com/",
    description: "Name every peak on the horizon",
    image: {
      avif: "/images/avif/descry.avif",
      webp: "/images/webp/descry.webp",
      fallback: "/images/eink/descry.jpg",
      width: 1216,
      height: 684,
    },
  },
  {
    name: "Omle",
    url: "https://omle.r-cha.dev/",
    description: "Private AI art, on your iPhone",
    image: {
      avif: "/images/avif/omle.avif",
      webp: "/images/webp/omle.webp",
      fallback: "/images/eink/omle.jpg",
      width: 1260,
      height: 709,
    },
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    name: "encourage.nvim",
    url: "https://github.com/r-cha/encourage.nvim",
    description: "Cure your impostor syndrome",
  },
  {
    name: "Birren Colors",
    url: "https://birren.vercel.app/",
    description: "Industrial color palettes from Faber Birren",
  },
  {
    name: "HDRify",
    url: "https://hdrify.me",
    description: "Stand out on Slack (in the worst way)",
  },
  {
    name: "dotfiles",
    url: "https://github.com/r-cha/dotfiles",
    description: "Set up your dev tools like mine",
  },
  {
    name: "rochadrums",
    url: "https://www.rochadrums.com/",
    description: "Check out my drumming",
  },
];
