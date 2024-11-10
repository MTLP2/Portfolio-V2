// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://matheolopes.com', // Remplacez par votre URL de site
    generateRobotsTxt: true, // Génère automatiquement robots.txt
    sitemapSize: 5000, // Nombre maximum d’URLs par fichier sitemap
    changefreq: 'weekly', // Fréquence de changement de pages
    priority: 0.7, // Priorité des pages par défaut
    exclude: ['/admin/*', '/private-page'], // Exclure des pages spécifiques du sitemap
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/private-page'] }, // Ajustez en fonction des pages à protéger
      ],
    },
  };
  