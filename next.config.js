const rehypeKatex = require("rehype-katex");
const remarkMath = require("remark-math");

const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

module.exports = withMDX({
  images: {
    domains: ["https://res.cloudinary.com/dcg5b3jpt"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
});
