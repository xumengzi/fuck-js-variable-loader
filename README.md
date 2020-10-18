## fuck-js-variable-loader

混淆变量名的 `loader`, 专门针对`js`文件, 其他文件也可以, 谨慎操作

效果如图
```
let WWWWWwwWwW = 1;
let nima = '';
let bar;

let fn = function () {
  WWWWWwwWwW++;
};

fn();
console.log(WWWWWwwWwW);
```

使用方法如下:

1. 下载 `npm i fuck-js-variable-loader`
2. 使用 和平常的 `loader` 使用方法一致

#### 全部配置属性

```js
module: {
    rules: [
      ...
      {
        test: /\.js$/,
        use: {
          loader: 'fuck-js-variable-loader',
          options: {
            basicByte: str,  // 比如'i L l vv w'
            isRandom: bool,  //大小写混淆
            repeat: number,  // 变量长度
          }
        }
      },
    ]
  },
```
