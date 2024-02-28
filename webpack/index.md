模块打包工具
webpack-cli: webpack命令行接口，安装后可运行npx webpack等命令

配置
entry: 入口文件
{
	webpack
}
output: 输出文件
{
	fileName: 输出文件名称
	path: 输出文件目录
}


打包速度优化
1.安装最新版的node和webpack版本

loader （文件处理器）

file-loader: 处理文件路径，将文件复制到dist中，并返回引用路径
url-loader: 处理文件路径，将文件复制到dist中，并返回引用路径,可设置文件大小,可将文件转化为base64

style-loader: 将css挂载到页面的head部分
css-loader: 分析几个css的关系，合并css文件
				importLoaders: 使用之后的loader处理import形式引入的css
sass-loader: 将scss解析为css，依赖node-sass 或dart-sass
postcss-loader: css解析器，可以与一些规则结合预处理一些css比如和
			autoprefixer一起为浏览器增加适配
			cssnano减小css体积

plugins (生命周期的副作用函数)

html-webpack-plugin: 打包时自动生成index.html并引入打包好的js
clean-webpack-plugin: 打包前清理旧的文件
webpack-bundle-analyzer: 分析打包后的文件大小 defaultSizes 可切换参数显示输入，输出，打包的文件大小
compression-webpack-plugin: 将文件变为压缩格式提高首屏幕加载速度,需要配合nginx支持gzip使用
copy-webpack-plugin 用于复制文件，主要用于复制public中的文件