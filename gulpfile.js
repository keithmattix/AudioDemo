var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({includePaths: ["bower_components/foundation/scss"]}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});

//Watch task
gulp.task('default',function() {
  livereload.listen();
  gulp.watch('sass/**/*.scss',['sass']);
});