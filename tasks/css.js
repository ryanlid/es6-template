import gulp from 'gulp'
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './utls/args'

gulp.task('css', () => {
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    // .pipe(gulpif(args.watch, livereload()))
})
