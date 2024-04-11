import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection("blog");

const pages = Object.fromEntries(collectionEntries.map(({ slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: 'route',

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  pages: {
    ...pages,
    index: { title: '', description: '', isSpecial: true },
    blog: { title: 'Posts', description: '', isSpecial: true },
    projects: {title: 'Projects', description: '', isSpecial: true }
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
	path: 'public/header.png',
	size: page.isSpecial ? [600] : [400],
    },
    border: {
	color: [255, 255, 255],
	width: 5,
        side: 'inline-start',
    },
  }),
});
