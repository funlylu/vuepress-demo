/*
 * @Author: Koko
 * @Date: 2021-11-04 09:30:53
 * @LastEditTime : 2021-11-04 11:57:03
 * @LastEditors  : Koko
 * @Description: In User Settings Edit
 * @FilePath     : \vuepress\docs\.vuepress\config.js
 */
module.exports = {
  // base:"/",
  // host:"0.0.0.0",//指定用于 dev server 的主机名
  // port: 8080, //指定 dev server 的端口
  // dest:".vuepress/dist",//指定 vuepress build 的输出目录 如果传入的是相对路径，则会基于 process.cwd() 进行解析
  title: 'Hello VuePress',// 网站的标题
  description: 'Just playing around',//网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中,
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {// 主题配置
    logo: '/logo.png',
    sidebar: 'auto',
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    nav: [// 导航连接
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https:/baidu.com', target: '_blank' },
    ],
    sidebar: require("./sidebar.js")
  },

}