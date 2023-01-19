var path = require("path");
var webpack = require("webpack");
var packageData = require("./package.json");

module.exports = {
    entry: {
        // Point "entry" to scripts you want to be CLI-eligible.
        phccs: "./src/index.ts",
        phccs_gash: "./src/cs-gash.ts",
        looph_gash: "./src/casual-gash.ts",
    },
    // Turns on tree-shaking and minification in the default Terser minifier
    // https://webpack.js.org/plugins/terser-webpack-plugin/
    mode: "production",
    devtool: false,
    output: {
        // Change the final string here to the name you want your script to use in mafia.
        path: path.resolve(__dirname, "KoLmafia", "scripts", packageData.name),
        filename: "[name].js",
        libraryTarget: "commonjs",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                // exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    optimization: {
        // Disable compression because it makes debugging more difficult for KolMafia
        minimize: false,
    },
    performance: {
        // Disable the warning about assets exceeding the recommended size because this isn't a website script
        hints: false,
    },
    plugins: [],
    externals: {
        // Add any ASH scripts you would like to use here.
        kolmafia: "commonjs kolmafia",
        "canadv.ash": "commonjs canadv.ash",
    },
};
