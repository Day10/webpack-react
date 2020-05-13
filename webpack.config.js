// why webpack use require？？？
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// dist 打包过后的文件会被保留，所以需要cleanwebpackplugin清除dist文件
// 这里CleanWebpackPlugin 更新，与webpack中文文档有所区别；英文文档及时更新了～
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // when using webpack-dev-middleware
    // publicPath: '/'
  },
  // source-map的作用： 因为是把多个js打包成一个js运行的，所以如果代码报错，那么控制台只会告诉你bundle.js报错，没有啥用。。
  // 用source-map的话，可以精确到到底是哪个js报错
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // Hot Module Replacement （or HMR）【模块热替换】 是指 模块在代码运行时部分刷新，而不是整页刷新
    // 热加载和热替换？？？
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
  
}