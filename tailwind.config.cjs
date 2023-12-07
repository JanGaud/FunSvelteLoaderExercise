const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				'main-green': '#97ca4b',
				'spark-yellow': '#f6f930',
				'brand-gray': '#2f2f2f',
			},
			fontFamily: {
				'main': ['Raleway', 'sans-serif'],
				'secondary': ['Rajdhani', 'sans-serif'],
			},
		}
	},
	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
