
## 基本配置

#### base
- 类型: string
- 默认值: /
  
部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束


## 主题

#### theme
- 类型: string
- 默认值: undefined

当你使用自定义主题的时候，需要指定它。

## 构建流程

#### postcss
- 类型: Object
- 默认值: { plugins: [require('autoprefixer')] }

postcss-loader (opens new window)的选项，请注意，指定这个值，将会覆盖内置的 autoprefixer，所以你需要自己将它加进去