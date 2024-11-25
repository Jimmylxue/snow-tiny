<br>

<h1 align="center">Welcome to snow-tiny 👋</h1>

<br>

snow-tiny 是一个专为前端同学开发的基于 tiny 的简单、轻量级的图片压缩工具。

只需三步，就可实现图片自动化压缩，极大提高效率和压缩体验！

![image-20221127111339637](https://vitepress-source.oss-cn-beijing.aliyuncs.com/typoraimage-20221127111339637.png)

GitHub: [传送门](https://github.com/Jimmylxue/snow-tiny)

> issues 是第一生产力！😄

知识星球：[传送门](http://www.jimmyxuexue.top)

> 大兄弟们聚过来，这件事很重要 🎉🎉🎉

(如果觉得不错 👍，给个 star ⭐ 吧，你的认可是我最大的动力 ！)

## 使用：

1. 安装

```
yarn add snow-tiny
```

2. 配置

项目根目录下新建 `snowtiny.json` 并做如下配置：

> 具体配置信息见:[传送门](http://blog.jimmyxuexue.top/snowtiny/usage/config.html)

```json
{
	"entry": "./images",
	"output": "./temp",
	"diffCompress": true,
	"flat": true,
	"saveOther": true
}
```

在`package.json` 中增加如下脚本：

```json
"scripts": {
  "compress": "npx snow"
}
```

3. 运行

```
npm run compress
```

## 配置信息

### entry

压缩的入口，在此案例配置文件中的入口为 `snowtiny.json` 文件同级目录下的 `images/`文件夹

### output

压缩后文件的输出位置，在此案例配置文件中的入口为 `snowtiny.json` 文件同级目录下的 `output/`文件夹。

> 在执行压缩前需要先确保项目中并无`output`对应的文件夹，因为在执行时会自动创建新的文件夹

### diffCompress

是否开启递归压缩，默认不开启。

> 开启递归压缩后会将入口文件夹下的所有子文件夹都进行递归压缩，如果不开启只会压缩入口文件夹本层的图片资源文件

### flat

是否平铺图片输出

> 开启平铺输出后所有的图片文件都将在`output`对应的文件夹下输出，不保留压缩文件夹时的文件结构。（这种配置最好保证压缩的文件没有重名）

### saveOther

是否将非图片资源也一起拷贝一份

> 这个配置主要考虑到前端开发时，压缩结束后只需替换压缩文件夹和输出文件夹的文件名即可完成项目的图片替换。所以如果有需要可以打开。
