<!--
 * @Author: your name
 * @Date: 2021-02-01 19:41:16
 * @LastEditTime: 2021-02-02 14:48:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\README.md
-->
# webpack5
webpack5搭建vue3开发环境

### 将 ES6+ 转 ES5
npm install @babel/core babel-loader @babel/preset-env -D

### 处理样式
npm install style-loader css-loader less less-loader -D

### 处理图片等静态资源
npm install url-loader file-loader -D

### 创建 html 文件
npm install html-webpack-plugin -D

### 开发服务器
npm install webpack-dev-server -D

### 清除打包文件
npm install clean-webpack-plugin -D

### 设置环境变量
npm install cross-env -D

### 分环境打包

### 打包压缩
#### 压缩html
#### 压缩css
npm install mini-css-extract-plugin optimize-css-assets-webpack-plugin -D
#### 压缩js
npm install terser-webpack-plugin -D
#### 压缩图片
npm install image-webpack-loader -D


