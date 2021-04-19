# react-sdk

Generate umd.js Demo for React+Ts project

React+Ts项目build生成umd.js


## 开发

```bash
  npm i
  npm run start
```

打开 `http://localhost:9876`


## 发布

```bash
  sh build.sh
```

打包后生成umd.js，接入示例

```
<script defer src="**.react-sdk.umd.js" data-username="world" data-message="msg" data-open-url="https://www.baidu.com"></script>
```