/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Base path para GitHub Pages - usando subdiretório
  basePath: process.env.NODE_ENV === 'production' ? '/biowox-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/biowox-landing/' : '',
};

module.exports = nextConfig;
