/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path para GitHub Pages - removed for custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/BioWox' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/BioWox/' : '',
};

module.exports = nextConfig;
