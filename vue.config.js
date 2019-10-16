
module.exports = {
  // baseUrl: '/gmecs/',
  // baseUrl: './',
  publicPath: './',
  // baseUrl:'/',//根路径（打包后文件夹路径）
  outputDir: 'dist', // 打包的时候生成的一个文件名
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)这些文件都可以写里面
  lintOnSave: false, // 是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
  devServer: {
    // open: false, // 启动项目后自动开启浏览器
    // host: '0.0.0.0', // 对应的主机名
    // port: 2000, // 端口号
    // https: false, // 是否开启协议名,如果开启会发出警告
    // // https: {
    // //     key: fs.readFileSync('path/to/server.key'),
    // //     cert: fs.readFileSync('path/to/server.crt'),
    // //     ca: fs.readFileSync('path/to/ca.pem')
    // // },
    // hotOnly: false, // 热模块更新的一种东西,webpack中自动有过配置,但如果我们下载一些新            的模块可以更好的给我更新一些配置
    // proxy: {
    // // 配置跨域
    //   '/api': {// 配置跨域的名字
    //     // target:'http//localhost:5000/api',//跨域的地址
    //     // target: 'http://39.106.157.136:8787/',
    //     target: 'http://39.106.157.136:8790/',
    //     ws: true,
    //     changOrigin: true, // 是否跨域
    //     pathRewrite: {// 当前的名字
    //       '^/api': ''
    //     }
    //   },
    //   '/ym_ypfx': {
    //     target: 'http://192.168.10.153:6433/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/ym_ypfx': ''
    //     }
    //   },
    //   '/mapApi': {
    //     // target: 'http://10.224.254.14:8080/',
    //     target: 'http://t{s}.tianditu.gov.cn/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/mapApi': ''
    //     }
    //   },
    //   '/GMCloudSearch': {
    //     target: 'http://39.106.157.136:8080/',
    //     // target: 'http://192.168.12.202:8788/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/GMCloudSearch': ''
    //     }
    //   }
    // }
  }
}
