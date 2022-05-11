const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/env', '@babel/preset-react'] },
        },
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              highlight: function (code, lang) {
                const hljs = require('highlight.js')
                const language = hljs.getLanguage(lang) ? lang : 'plaintext'
                return hljs.highlight(code, { language }).value
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      publicPath: './',
      favicon: './src/assets/favicon.png',
    }),
  ].filter((n) => n),
  devServer: {
    port: 3003,
    static: {
      publicPath: 'http://localhost:3003/',
    },
    hot: true,
  },
}
