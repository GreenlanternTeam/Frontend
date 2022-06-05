const path = require('path')
module.exports = {
	stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-designs',
		'storybook-addon-next-router',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss')
				}
			}
		}
	],
	framework: '@storybook/react',
	webpackFinal: async (config) => {
		;(config.resolve.alias = {
			...config.resolve.alias,
			// 절대 경로 추가
			components: path.resolve(__dirname, '../components'),
			styles: path.resolve(__dirname, '../styles'),
			pages: path.resolve(__dirname, '../pages'),
			public: path.resolve(__dirname, '../public'),
			layout: path.resolve(__dirname, '../layout'),
			utils: path.resolve(__dirname, '../utils'),
			hooks: path.resolve(__dirname, '../hooks')
		}),
			config.module.rules.unshift({
				test: /\.svg$/,
				use: ['@svgr/webpack']
			})

		return config
	}
}

// module.exports = {
// 	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
// 	addons: [
// 		'@storybook/addon-links',
// 		'@storybook/addon-essentials',
// 		'storybook-addon-designs',
// 		{
// 			name: '@storybook/addon-postcss',
// 			options: {
// 				postcssLoaderOptions: {
// 					implementation: require('postcss')
// 				}
// 			}
// 		}
// 	]
// }
