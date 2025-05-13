// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // Desactiva optimización si usas imágenes locales
    domains: ['localhost'],  // Permite imágenes de tu Strapi local
  },
  // Opcional: Configuración para subir a Vercel
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  }
}

export default nextConfig;