/** @type {import('next').NextConfig} */
const nextConfig = {
  // Page redirection
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/admin",
  //       permanent: true,
  //     }
  //   ]
  // },
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
