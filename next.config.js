const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['hawk-style.com', 'images.unsplash.com'],
    },
    async redirects() {
        return [
            {
                source: '/about', // L'URL de l'ancienne page
                destination: '/', // L'URL de la nouvelle page
                permanent: true, // Indique que c’est une redirection 301 permanente
            },
        ];
    },
}

module.exports = withNextIntl(nextConfig);
