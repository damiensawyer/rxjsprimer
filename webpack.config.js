module.exports = {
    entry: "./main", // pointing to main.ts
    output: { filename: "app.js" }, // webpack output to a single file that you can upload to a browser.
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}