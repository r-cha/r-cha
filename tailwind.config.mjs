/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mono':	['"Oxygen Mono"', ...defaultTheme.fontFamily.mono],
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({addVariant}) {
			addVariant(
			'prose-inline-code',
			'&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
			);
		})
	],
}
