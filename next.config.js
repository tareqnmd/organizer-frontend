/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['lucide-react'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.gravatar.com',
			},
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
	reactStrictMode: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
};

module.exports = nextConfig;
