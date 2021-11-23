# 默认主题的模板语法
这是一个利用 VuePress 框架书写 markdown 的 语法模板集合

## 快速上手
本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

### 目录
 输入
```md
[[toc]]
```
输出

[[toc]]



### 小图标

 输入
```md
:tada: :100:
```
输出

:tada: :100:

### 自定义容器——默认主题

 输入
```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::
::: details 点击查看代码
    ```js
    console.log('你好，VuePress！')
    ```
:::
```



输出

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

### 代码高亮语法
VuePress 使用了 Prism (opens new window)来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

输入
```md
    ``` js{2}
        export default {
            name: 'MyComponent', // 高亮显示第二行
            // ...
        }
    ```
```

输出
```js{2}
    export default {
        name: 'MyComponent', ##
        // ...
    }
 ```

### 导入代码段
你可以通过下述的语法导入已经存在的文件中的代码段

```md
<<< @/filepath
```
<<< @/docs/guide/sidebar.js

::: tip 注意
由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 @ 默认值是 process.cwd()。
:::
