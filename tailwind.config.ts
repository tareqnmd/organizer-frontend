import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1rem',
			},
		},
		extend: {
			colors: {
				primary: '#0b2447',
				background: '#ffffff',
			},
		},
	},
	plugins: [],
};
export default config;
