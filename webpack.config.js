module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[hash:base64]", // default
          auto: true // default
        },
        sourceMap: true
      }
    },
  ]
}
