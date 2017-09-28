module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'fireform',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    html: {
      template: 'demo/public/index.html'
    }
  }
}
