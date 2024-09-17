/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: "#0087FF",
				themeDark: "#10599b",
				themeDarkBlur: "#10599b22",
			},
		},
	},
	plugins: [daisyui],
};
