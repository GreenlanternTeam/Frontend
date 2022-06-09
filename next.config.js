/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko', 'en']
	}
}

module.exports = nextConfig

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		})

		return config
	}
}
