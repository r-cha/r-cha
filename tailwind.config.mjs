/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '375px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				'codeactive': 'hsl(210 100% 63%)'
			},
			fontFamily: {
				'mono': ['Source Code Pro Variable', ...defaultTheme.fontFamily.mono],
			}
		}
	},
	plugins: [
	],
}
