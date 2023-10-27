const { join } = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/sklep/rowery',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
