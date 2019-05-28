/*########################### This code is written by Norhan El-Deeb @2019 #########################*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile Sass File
function style(){
    //Where is the scss file
    return gulp.src('./scss/**/*.scss')
    //Passing scss file through sass compiler
    .pipe(sass().on('error' , sass.logError))
    //Where to compile scss file
    .pipe(gulp.dest('./css'))
    //Stream changes to all browsers
    .pipe(browserSync.stream());
}

// Watch (Update changes automatically)
function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });

    gulp.watch('./scss/**/*.scss' , style);
    gulp.watch('./*.html').on('change' , browserSync.reload);
    gulp.watch('./js/**/*.js').on('change' , browserSync.reload);
    


}

exports.style = style;
exports.watch = watch;


