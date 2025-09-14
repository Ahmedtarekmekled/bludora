/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bludora.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://bludora.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';
    
    // Set higher priority for main pages
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/about') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/services') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/work' || path === '/selected-work') {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    // Add additional paths that might not be automatically detected
    const additionalPaths = [
      {
        loc: '/about',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/services',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/work',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/selected-work',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];

    return additionalPaths;
  },
  // Add custom headers for better SEO
  headers: [
    {
      source: '/sitemap.xml',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, stale-while-revalidate=43200',
        },
        {
          key: 'Content-Type',
          value: 'application/xml',
        },
      ],
    },
    {
      source: '/robots.txt',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400',
        },
        {
          key: 'Content-Type',
          value: 'text/plain',
        },
      ],
    },
  ],
};
