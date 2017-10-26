# Gulp教學

## Usage
1. clone the repository
```
git clone https://github.com/andy6804tw/gulp_tutorial.git
```
2. install package
```
$ npm install
```
3. run script
```
$ gulp serve
```

## Introduce
- Gulp 是基於 Node.js 的任務自動化管理工具
- 最主要就是 Gulp 使用了 streams ( 流 ) 的概念，一個任務一個任務的依序按照流程做完，相當的容易思考和理解

### First
1. 初始化環境
```
npm init
```
2. 安裝gulp全域變數（安裝一次即可）
```
npm install -g gulp
```
3. 安裝gulp-webserver套件
```
npm install gulp-webserver -save-dev
```
### econd
完成安裝就開始建立環境設定檔吧
1. 新增gulpfile.js
內容撰寫下列的程式，這就是當我們執行 gulp 的時候會跑的任務流程。
```js
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./app/')  //設定路經資料夾
    .pipe(webserver({
      port:3000,   //server port
      livereload: true, //即時載入(同步)
      directoryListing: false,//不要顯示文件樹狀清單
      open: true, //執行指令時會自動載入http://localhost:3000/
      fallback: 'index.html' //自動開啟 index.html
    }));
});

gulp.task('serve',['webserver']);
```
### Finally
最後直接輸入 gulp serve就可以豎立執行囉,並且嘗試修改html頁面並按ctrl+s看看是否預設路徑的網頁也同時更新了,此功能主要是減少開發上的麻煩讓開發更有效率。
```
$ gulp serve
```
