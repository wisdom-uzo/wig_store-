/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'i3.ytimg.com',     // Allow YouTube thumbnails
          'i.ytimg.com',      // Alternative YouTube thumbnail domain
          'img.youtube.com',  // Another YouTube image domain
        ],
      },
};

export default nextConfig;


// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: [
//         'i3.ytimg.com',     // Allow YouTube thumbnails
//         'i.ytimg.com',      // Alternative YouTube thumbnail domain
//         'img.youtube.com',  // Another YouTube image domain
//       ],
//     },
//     // Ensure we handle video files properly
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.(mp4|webm)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/videos/',
//             outputPath: 'static/videos/',
//             name: '[name].[hash].[ext]',
//           },
//         },
//       });
//       return config;
//     },
//   }
  
//   module.exports = nextConfig