module.exports = {
    entry: ["./main", "./mycircle"],
    output: { filename: "app.js" }, // webpack output to a single file that you can upload to a browser.
    module: {
        loaders: [
            {
                test: /.ts$/, // ts files will be found and piped to the ts-loader
                exclude: /node_modules/,
                loader: "ts-loader",
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"] // when we resolve a module in another module, it will look for js and ts
    }
}