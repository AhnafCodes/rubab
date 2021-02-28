const path = require("path");

module.exports = {
    entry: {
        demos: './demos/jsx/index.js',
    },
    output: {
        filename: '[name].gen.js',
        path: __dirname + '[name]/static/[name]/js'
    },
    devtool: "source-map",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
        {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]},
    optimization: {
        splitChunks: {
            cacheGroups: {
                react: { test: /[\\/]node_modules[\\/]((react).*)[\\/]/, name:"react", chunks: "all"}
            }
        }
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            static: path.resolve(__dirname, 'static')
        }
    }
}