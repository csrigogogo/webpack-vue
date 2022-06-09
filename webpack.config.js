const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  mode: "development",
  // 在配置文件中，需要手动指定 入口 和 出口
  devServer: {
    static: "./dist",
  },
  entry: path.join(__dirname, "./src/main.js"), // 入口，表示，要使用 webpack 打包哪个文件
  output: {
    // 输出文件相关的配置
    path: path.join(__dirname, "./dist"), // 指定 打包好的文件，输出到哪个目录中去
    filename: "[contenthash].bundle.js", // 这是指定 输出的文件的名称
  },
  plugins: [
    // 配置插件的节点
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      // 创建一个 在内存中 生成 HTML  页面的插件
      template: path.join(__dirname, "./src/index.html"), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      filename: "index.html", // 指定生成的页面的名称
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, //  配置处理 .css 文件的第三方loader 规则
    ],
  },
}
