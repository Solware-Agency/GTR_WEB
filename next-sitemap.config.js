/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dannyantonucci.com',
  generateRobotsTxt: true,
  exclude: ['/legal/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/sobre-danny'),
    await config.transform(config, '/trayectoria'),
    await config.transform(config, '/trading-room'),
    await config.transform(config, '/cursos'),
    await config.transform(config, '/asesor-experto'),
    await config.transform(config, '/testimonios'),
    await config.transform(config, '/contacto'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/legal/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://dannyantonucci.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    // Configuración personalizada para diferentes rutas
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/trading-room': { priority: 0.9, changefreq: 'daily' },
      '/sobre-danny': { priority: 0.8, changefreq: 'monthly' },
      '/cursos': { priority: 0.8, changefreq: 'weekly' },
      '/asesor-experto': { priority: 0.8, changefreq: 'weekly' },
      '/testimonios': { priority: 0.7, changefreq: 'weekly' },
      '/contacto': { priority: 0.6, changefreq: 'monthly' },
      '/trayectoria': { priority: 0.6, changefreq: 'monthly' },
    };

    const pathConfig = customConfig[path] || {};

    return {
      loc: path,
      changefreq: pathConfig.changefreq || config.changefreq,
      priority: pathConfig.priority || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};