const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
//const withTM = require('next-transpile-modules');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

//require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')


module.exports = withSass(withCSS({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
      server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
      },
      browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
      }
      },
    webpack: config => {
        config.plugins = config.plugins || []
    
        config.plugins = [
          ...config.plugins, 
          // Read the .env file
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true
          }),                            // ,
          // new BundleAnalyzerPlugin()
          ]
        return config
      },
      exportPathMap: function() {
        return {
          '/': { page: '/index' },
          'Videoplay': { page: 'Videoplay'},
        }}
  }))



// module.exports = withSass({
//     webpack: config => {
//         config.plugins = config.plugins || []
    
//         config.plugins = [
//           ...config.plugins,
    
//           // Read the .env file
//           new Dotenv({
//             path: path.join(__dirname, '.env'),
//             systemvars: true
//           })
//         ]
    
//         return config
//       }
//   })
