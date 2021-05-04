const rehypeKatex = require("rehype-katex");
const remarkMath = require("remark-math");

const withMDX = require("@next/mdx")({
	extension: /\.mdx$/,
	options: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
});

module.exports = require("next-optimized-classnames")(
	withMDX({
		images: {
			domains: ["res.cloudinary.com"],
		},
		webpack: (config, { isServer }) => {
			if (isServer) {
				require("./scripts/generate-sitemap");
			}

			return config;
		},
	})
);
