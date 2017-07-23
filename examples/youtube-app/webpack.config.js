const path = require('path');

const config = {
    entry: path.resolve(__dirname, './App.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' }
        ]
    }
};

module.exports = config;