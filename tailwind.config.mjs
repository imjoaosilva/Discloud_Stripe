/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"apple-pay-bg": "#3C4257",
				"apple-pay-text": "#8792A2",
				"promotional-text": "#635BFF",
			}
		},
	},
	plugins: [],
}
