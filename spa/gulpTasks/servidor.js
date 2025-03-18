const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { appHtml, appCSS, appJS, appIMG } = require('./app')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
   gulp.watch('src/**/*.html', appHtml)
   gulp.watch('src/**/*.scss', appCSS)
   gulp.watch('src/**/*.js', appJS)
   gulp.watch('src/assets/imgs/**/*.*', appIMG)

   return cb()
}

module.exports = {
    servidor,
    monitorarArquivos
}