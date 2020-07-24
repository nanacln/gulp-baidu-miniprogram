var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
// var babel = require('gulp-babel')
var imagemin = require('gulp-imagemin');
gulp.task('swan', async()=> {
  await gulp.src('./src/**/*.swan')
        // .pipe(rename(function(path) {
        //     path.extname = '.swan'
        // }))
        .pipe(gulp.dest('build/'))
})
gulp.task('sass', async()=> {
  await gulp.src(['./src/pages/**/*.scss','./src/app.scss'])
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename(function(path) {
            path.extname = '.css'
        }))
        .pipe(gulp.dest('build/pages'))
})
gulp.task('sass2', async()=> {
  await gulp.src('./src/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(rename(function(path) {
          path.extname = '.css'
      }))
      .pipe(gulp.dest('build'))
})
gulp.task('json', async()=> {
  await gulp.src('./src/**/*.json')
        .pipe(gulp.dest('build'))
})
gulp.task('js', async()=> {
  await gulp.src('./src/**/*.js')
        // .pipe(babel({
        //     presets: ['es2015']
        // }))
        .pipe(gulp.dest('build'))
})
gulp.task('image', async()=> {
  await gulp.src('./src/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            interlaced: true, //隔行扫描压缩jqp图片
            optimizationLevel: 5, //0-7
            progressive: true, //无损压缩jpg
            multipass: true //多次优化svg直到最优
        }))
        .pipe(gulp.dest('build'))
})


gulp.task('default',gulp.series('swan', 'sass','sass2','json', 'js', "image",() => {
  gulp.watch('./src/**/*.swan', gulp.series('swan'))
    gulp.watch('./src/**/*.scss', gulp.series('sass'))
    gulp.watch('./src/app.scss', gulp.series('sass2'))
    gulp.watch('./src/**/*.json', gulp.series('json'))
    gulp.watch('./src/**/*.js', gulp.series('js'))
    gulp.watch('./src/**/*.{png,jpg,gif,ico}',gulp.series('image'))
}));


// gulp.task('watch',()=>{
//   gulp.watch('./src/**/*.swan',gulp.series('swan'))
//   gulp.watch('./src/**/*.scss',gulp.series('sass'))
//   gulp.watch('./src/**/*.json',gulp.series('json'))
//   gulp.watch('./src/**/*.js',gulp.series('js'))
//   gulp.watch('./src/**/*.{png,jpg,gif,ico}',gulp.series('image'))
// })
// gulp.task('default', gulp.series('swan', 'sass', 'json', 'js', "image","watch"));