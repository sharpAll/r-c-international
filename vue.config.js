module.exports = {
  devServer: {
    port: 8888,
    host: "localhost",
    https: false,
    open: true
  },
  lintOnSave: false, // 关闭格式检查
  productionSourceMap: false // 打包时不会生成 .map 文件，加快打包速度
};
