const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./**/*.{jsx,tsx}", "./styles/**.css"],
	darkMode: "class", // or 'media' or 'class'
	mode: "jit",
	// important: true,
	theme: {
		extend: {
			// height: {
			// 	"110": "34rem"
			// },
			fontFamily: {
				sans: ["MessinaSans", "Open Sans", "Arial"],
				mono: ["Cascadia Code"],
			},
			colors: {
				blue: colors.sky,
				code: {
					green: "#b5f4a5",
					yellow: "#ffe484",
					purple: "#d9a9ff",
					red: "#ff8383",
					blue: "#93ddfd",
					white: "#fff",
				},
			},
			typography: (theme) => ({
				// none: {
				// 	css: {
				// 		h1: {
				// 			"margin-top": "0",
				// 			"margin-bottom": "0",
				// 		},
				// 		h2: {
				// 			"margin-top": "0",
				// 			"margin-bottom": "0",
				// 		},
				// 		h3: {
				// 			"margin-top": "0",
				// 			"margin-bottom": "0",
				// 		},
				// 		h4: {
				// 			"margin-top": "0",
				// 			"margin-bottom": "0",
				// 		},
				// 		p: {
				// 			"margin-top": "0",
				// 			"margin-bottom": "0",
				// 		},
				// 	},
				// },
				DEFAULT: {
					css: {
						color: theme("colors.gray.700"),
						a: {
							// color: theme("colors.gray.500"),
							textDecorationColor: theme("colors.gray.400"),
							"&:hover": {
								color: theme("colors.gray.600"),
							},
							// color: theme("colors.blue.500"),
							// textDecorationColor: theme("colors.blue.500"),
							// "&:hover": {
							// 	color: theme("colors.blue.600"),
							// },
							code: { color: theme("colors.blue.400") },
						},
						h1: {
							fontWeight: "700",
							// letterSpacing: theme("letterSpacing.tight"),
							marginTop: "3rem",
							color: theme("colors.gray.900"),
						},
						h2: {
							fontWeight: "700",
							// letterSpacing: theme("letterSpacing.tight"),
							color: theme("colors.gray.900"),
						},
						h3: {
							fontWeight: "600",
							color: theme("colors.gray.900"),
						},
						"h4,h5,h6": {
							color: theme("colors.gray.900"),
						},
						code: {
							color: theme("colors.blue.500"),
							backgroundColor: theme("colors.gray.100"),
							paddingLeft: "4px",
							paddingRight: "4px",
							paddingTop: "2px",
							paddingBottom: "2px",
							borderRadius: "0.25rem",
						},
						"code:before": {
							content: "none",
						},
						"code:after": {
							content: "none",
						},
						hr: { borderColor: theme("colors.gray.200") },
						"ol li:before": {
							fontWeight: "600",
							color: theme("colors.gray.500"),
						},
						"ul li:before": {
							backgroundColor: theme("colors.gray.500"),
						},
						strong: { color: theme("colors.gray.600") },
						blockquote: {
							color: theme("colors.gray.900"),
							borderLeftColor: theme("colors.gray.200"),
						},
					},
				},
				dark: {
					css: {
						color: theme("colors.gray.300"),
						a: {
							color: theme("colors.white"),
							textDecorationColor: theme("colors.blue.500"),
							"&:hover": {
								color: theme("colors.blue.400"),
							},
							code: { color: theme("colors.blue.400") },
						},
						h1: {
							fontWeight: "700",
							letterSpacing: theme("letterSpacing.tight"),
							color: theme("colors.gray.100"),
						},
						h2: {
							fontWeight: "700",
							letterSpacing: theme("letterSpacing.tight"),
							color: theme("colors.gray.100"),
						},
						h3: {
							fontWeight: "600",
							color: theme("colors.gray.100"),
						},
						p: {
							color: theme("colors.gray.100"),
						},
						"h4,h5,h6": {
							color: theme("colors.gray.100"),
						},
						code: {
							backgroundColor: theme("colors.gray.800"),
						},
						hr: { borderColor: theme("colors.gray.700") },
						"ol li:before": {
							fontWeight: "600",
							color: theme("colors.gray.400"),
						},
						"ul li:before": {
							backgroundColor: theme("colors.gray.400"),
						},
						strong: { color: theme("colors.gray.100") },
						thead: {
							color: theme("colors.gray.100"),
						},
						tbody: {
							tr: {
								borderBottomColor: theme("colors.gray.700"),
							},
						},
						blockquote: {
							color: theme("colors.gray.100"),
							borderLeftColor: theme("colors.gray.700"),
						},
					},
				},
			}),
		},
		fontFamily: {
			sans: ["Open Sans", "Helvetica"],
		},
	},
	variants: {
		extend: {
			borderWidth: ["dark"],
			borderOpacity: ["dark"],
		},
		typography: ["dark"],
		scrollbar: ["rounded", "dark"],
	},
	plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
