const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class', // or 'media' or 'class'
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#fff',
			primary: {
				DEFAULT: '#002147',
				hover: '#183D68',
				disabled: '#183D68',
			},
			secondary: {
				DEFAULT: '#2E2E2E',
				hover: '#5A5A5A',
				disabled: '#5A5A5A',
			},
			dark: {
				100: '#FFFFFF', // Text - Header
				200: '#FFFFFF', // Text - Title
				300: '#909198', // Text - Subtitle
				400: '#232323', // Background - Secondary
				500: '#171717', // Background - Primary
			},
			light: {
				100: '#000000', // Text - Header
				200: '#000000', // Text - Title
				300: '#C7C7C7', // Text - Subtitle
				400: '#F7F7F7', // Background - Secondary
				500: '#FFFFFF', // Background - Primary
			},
		},
		extend: {
			fontFamily: {
				sans: ['Merriweather Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
