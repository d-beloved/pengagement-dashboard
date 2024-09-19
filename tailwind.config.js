/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				theme: "#f2f7ff",
				themebg: "#0169FF",
				themeDarkBlur: "#10599b22",
			},
		},
	},
	plugins: [daisyui],
};
