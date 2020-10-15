const path = require('path');

module.exports = {
    entry:{
        entry: './src/main.js'
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: 'umd'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].min.[ext]",
                            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                            publicPath: "fonts/",
                            outputPath: "fonts/"
                        }
                    }
                ]
            }
        ],
    },
    plugins: [],
    devServer:{},
    mode: "production"
}
