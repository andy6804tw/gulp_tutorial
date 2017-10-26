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