/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // transpile packages that ship untranspiled ESM to avoid duplicate React/runtime issues
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'maath',
    '@react-spring/three',
    '@react-spring/animated',
    '@react-spring/core',
    '@use-gesture/react',
    'zustand'
  ],
  // output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
