module.exports = {
    ignoreWarnings: [/Failed to parse source map/],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
                exclude: /node_modules/, // Ignore node_modules to prevent warnings
            },
        ],
    },
};