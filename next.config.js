const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['hawk-style.com', 'images.unsplash.com'],
    },
}

module.exports = withNextIntl(nextConfig);

