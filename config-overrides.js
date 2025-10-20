const { override, addWebpackPlugin } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  // Dodaj kompresiju
  addWebpackPlugin(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    })
  ),
  
  // Optimizuj Terser i dodaj fallback-ove
  (config) => {
    // Dodaj fallback-ove za Node.js module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/")
    };
    
    // Optimizuj Terser
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer instanceof TerserPlugin) {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            compress: {
              ...(minimizer.options.terserOptions?.compress || {}),
              drop_console: true,
              drop_debugger: true,
            },
          };
        }
      });
    }
    
    // Optimizuj splitChunks
    if (config.optimization) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    
    return config;
  }
);
