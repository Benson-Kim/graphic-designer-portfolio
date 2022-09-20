/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#17B8EB",
				"secondary-blue": "#4285F4",
				"primary-black": "#484848",
				"secondary-black": "#1d1e20",
				"primary-gray": "#717171",
				"secondary-gray": "#444",
				"dark-gray": "#5F6368",
				"red-berry": "#EA4335",
				"primary-green": "#34A853",
				"closeto-orange": "#F29900",
			},
		},
	},
	plugins: [require("daisyui")],
};
