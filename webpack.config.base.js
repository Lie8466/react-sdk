const path = require("path");

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.ts')
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
        use: [{
            loader: 'babel-loader',
            options: {
              configFile: require('path').resolve(__dirname, './babel.config'),
              cacheDirectory: true
            }
        }, 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.json', '.jsx'],
    alias: {
      "@src": path.resolve(__dirname, "./src"),
    },
  },
};
