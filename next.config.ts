/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    domains: ['github.com', 'linkedin.com', 'medium.com'], // Add domains for images if needed
  },
  swcMinify: true,
}

export default nextConfig;
