const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				hubotSans: ['hubotSans'],
				hubotSansBold: ['hubotSansBold'],
				hubotSansXbold: ['hubotSansXbold']
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
