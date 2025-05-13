/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig


/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone', // Para menor tamaño de despliegue
}