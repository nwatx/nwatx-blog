module.exports = {
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2560, 3840],
		domains: ["res.cloudinary.com"],
		loader: 'cloudinary',
		path: 'https://res.cloudinary.com/dcg5b3jpt/image/upload/'
	},
	// webpack: (config, { isServer }) => {
	// 	if (isServer) {
	// 		require("./scripts/generate-sitemap");
	// 	}

	// 	return config;
	// },
	typescript: {
		ignoreBuildErrors: true
	}
};
