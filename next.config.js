/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.wikimg.net',
				port: '',
				pathname: '/en/strategywiki/images/**',
			},
			{
				protocol: 'https',
				hostname: 'static.wikia.nocookie.net',
				port: '',
				pathname: '/maplestory/images/**',
			},
		],
	},
};

module.exports = nextConfig;
