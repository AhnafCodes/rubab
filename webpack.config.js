const path = require("path");
const apps = require("./apps.json");
const entries = {};
Object.keys(apps).forEach( app => {
    entries[`${app}/static/${app}/js/${app}`] = `./${app}/jsx/index.js`
})
module.exports = {
    entry: {
        ...entries
    },
    output: {
        filename: pathData => pathData.chunk.name === 'react' ? 'static/js/react.gen.js':'[name].gen.js',
        /*.gen is an extension I made up  to differentiate webpack generated file and can be used to add to gitignore if needed */
        path: __dirname
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