/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},

			fontFamily: {
				merriweather: ['Merriweather', 'serif'],
				garamond: ['"EB Garamond"', 'serif'],
				signika: ['"Signika"', 'sans-serif'],
				notoSerif: ['"Noto Serif Ethiopic"', 'serif'],
			},
			colors: {}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
