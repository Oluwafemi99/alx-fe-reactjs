/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./public/index.html", // required by checker
		"./index.html", // actual Vite entry
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
