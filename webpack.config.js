const fs = require('fs')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const imageminGifsicle = require('imagemin-gifsicle')
const imageminPngquant = require('imagemin-pngquant')
const imageminSvgo = require('imagemin-svgo')
const imageminMozjpeg = require('imagemin-mozjpeg')

const isDev = process.env.NODE_ENV === 'development'

const generateHtmlPlugins = () => {
  return fs.readdirSync(path.resolve(__dirname, 'src/views/pages'))
    .map(file => {
      return new HtmlWebpackPlugin({
        template: `views/pages/${file}`,
        filename: `${file.split('.')[0]}.html`
      })
    })
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: [
      './js/index.js',
      './style/index.styl'
    ]
  },
  output: {
    filename: 'js/[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  },
  devServer: {
    port: 9090
  },
  plugins: [
    ...generateHtmlPlugins(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/statics'),
        to: path.resolve(__dirname, 'dist')
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'images'
            }
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                imageminGifsicle({
                  interlaced: false
                }),
                imageminMozjpeg({
                  progressive: true,
                  arithmetic: false
                }),
                imageminPngquant({
                  floyd: 0.5,
                  speed: 2
                }),
                imageminSvgo({
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false }
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              "@babel/plugin-proposal-private-methods"
            ]
          }
        }
      }
    ]
  }
}
