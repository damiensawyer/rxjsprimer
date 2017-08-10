module.exports = {
    entry: ["./main", "./mycircle"],
    output: { filename: "app.js" }, // webpack output to a single file that you can upload to a browser.
    module: {
        rules: [
            // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.ts$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"] // when we resolve a module in another module, it will look for js and ts
    }
}