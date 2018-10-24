const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = withTypescript(withCSS({
  distDir: 'build',
  webpack(config, options) {
      console.log('========')
      console.log(config)
      console.log(options)
    // if (process.env.ANALYZE) {
    //   config.plugins.push(new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerPort: 8888,
    //     openAnalyzer: true
    //   }))
    // }
    // console.log(config.pageExtensions)
    // const { dir, defaultLoaders } = options
    // config.pageExtensions.push(".ts", ".tsx")
    config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules|dev/,
      loader: 'babel-loader!awesome-typescript-loader'
    })
    

    return config
  },
  cssModules: true
}))
