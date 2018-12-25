const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              //because remove style-loader,my css can't work
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]"
              } // translates CSS into CommonJS
            },
            {
              loader: "less-loader" // compiles Sass to CSS
            }
          ]
        })
      },

      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "index.html"
    }),
    new ExtractTextPlugin("main.css")
  ],
  devServer: {
    // configuration for webpack-dev-server
    // contentBase: './app/public',  //source of static assets
    port: 3000 // port to run dev-server
  }
};
