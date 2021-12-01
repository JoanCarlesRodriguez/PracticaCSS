  
const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass')); 
const imagemin = require('gulp-imagemin');



function sassCompilador() {
return gulp.src('./sass/**/*.scss')
    /*.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))  Puc llevar lo de compressed per no comprimir*/
    .pipe(sass().on('error', sass.logError))    /*per no comprimir*/
    .pipe(gulp.dest('./css'));
}
function vigilarSass() {
gulp.watch ('./sass/**/*.scss', sassCompilador);
}
  

var cssmin = require('gulp-cssmin');        // CSS
//var rename = require('gulp-rename');

function comprimirCss () {
return gulp.src('./Css/*.css')
        .pipe(cssmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));;
};


function comprimirFotos (){                      //Per comprimir ses fotos
return gulp.src('./Fotos/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/fotos'))
};
 

exports.cssComprimir = comprimirCss
exports.fotosComprimir = comprimirFotos
exports.compilarSass = sassCompilador
exports.vigilarSass = vigilarSass