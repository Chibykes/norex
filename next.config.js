const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
});


module.exports = withPWA({
	reactStrictMode: true,
	images: {
		domains: ['upload.wikimedia.org','flagcdn.com'],
	}
});
