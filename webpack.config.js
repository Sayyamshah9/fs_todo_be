const path = require("path");

module.exports = {
  entry: "./server.js", // Entry point of your application
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    publicPath: "/",
  },
  target: "node",
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader", // Transpile JavaScript using Babel
  //         options: {
  //           presets: ["@babel/preset-env"],
  //         },
  //       },
  //     },
  //   ],
  // },
};
