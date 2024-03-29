/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			maxWidth: {
				'task-container': '1154px',
				'home-container': '800px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			minHeight: {
				'task-content-box': 'calc(100vh - 6rem)',
			},
			backgroundColor: {
				checkBox: '#0075FF',
			},
			borderColor: {
				checkBox: '#0075FF',
			},
		},
	},
	plugins: [],
};
