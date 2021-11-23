/*
 * @Author       : Koko
 * @Date         : 2021-11-04 11:32:20
 * @FilePath     : \vuepress\docs\guide\sidebar.js
 * @LastEditTime : 2021-11-04 14:32:26
 * @LastEditors  : Koko
 * @Description  : 当前目录下侧边栏导航配置
 */
module.exports = [
    {
      title:'快速上手',
      collapsable: true,
      children:[
        '/guide/',//指向md文档
      ]
    },
    {
      title:'模板',
      collapsable: true,
      children:[
        '/guide/template',
      ]
    }
]