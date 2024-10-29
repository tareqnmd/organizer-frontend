import type { Config } from 'tailwindcss';
const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			screens: {
				xs: '480px',
			},
			colors: {
				background: {
					dark: {
						DEFAULT: '#04151f',
					},
					light: {
						DEFAULT: '#fafafa',
					},
				},
				dark: {
					border: {
						DEFAULT: '#fafafa',
					},
					shadow: {
						DEFAULT: '#333333',
					},
					text: {
						DEFAULT: '#fafafa',
					},
					DEFAULT: '#04151f',
				},
				light: {
					border: {
						DEFAULT: '#04151f',
					},
					shadow: {
						DEFAULT: '#cccccc',
					},
					text: {
						DEFAULT: '#04151f',
					},
					DEFAULT: '#fafafa',
				},
				status: {
					inactive: '#e5e7eb',
					success: '#127369',
					danger: '#8C1F28',
					neutral: '#01415B',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
