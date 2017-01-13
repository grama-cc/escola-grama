console.log(1234)
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

gulp.task('batata', function() {
	console.log('batatinha');
	gulp.src('./sass/**/*.scss')
	// ** qq pasta dentro da pasta sass
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest("build"));

});

gulp.task('watch', ['batata'], function() {
	// batata em cima para que ele rode a task batata assim que rodar a task watch
	gulp.watch('./sass/**/*.scss', ['batata']);

});
