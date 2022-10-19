/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['res.cloudinary.com']
	},
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true
	}
}

module.exports = nextConfig
