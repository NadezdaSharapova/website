// module.exports = {
//   webpack: (config) => {
//     config.node = {
//       fs: 'empty'
//     }
//     return config
//   }
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //experimental:{appDir: true},
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}

module.exports = nextConfig
