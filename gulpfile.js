var gulp = require('gulp')
var g = require('gulp-load-plugins')()
var del = require('del')
var series = require('run-sequence')

gulp.task('clean', del.bind(null, ['.tmp', 'dist']))

gulp.task('build:min', ['build:web'], function () {
  return gulp.src('dist/alchemist-hsl.js')
  .pipe(g.uglify())
  .pipe(g.rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist'))
})

gulp.task('build:web', function () {
  return gulp.src('index.js')
  .pipe(g.webpack({
    output: {
      filename: 'alchemist-hsl.js',
      libraryTarget: 'umd',
      library: 'alchemist_hsl',
      sourcePrefix: ''
    }
  }))
  .pipe(gulp.dest('dist'))
})

gulp.task('build', ['build:web', 'build:min'])

gulp.task('test:run', function () {
  return gulp.src('test/*.js')
    .pipe(g.mocha({ reporter: 'spec' }))
    .on('error', warn)
})

gulp.task('test', function (cb) {
  series('build', 'test:run', 'lint', cb)
})

gulp.task('lint', function () {
  return gulp.src(['gulpfile.js', 'test/*.js', 'index.js'])
    .pipe(g.jscs())
    .on('error', warn)
})

gulp.task('watch:lint', ['lint'], function () {
  gulp.watch(['gulpfile.js', '.jscsrc', 'test/*.js', 'index.js'], ['lint'])
})

gulp.task('default', ['test'], function () {
  gulp.watch('test/*.js', ['test'])
  gulp.watch('lib/*.js', ['test', 'lint'])
})

function warn (err) {
  console.warn(err.message)
  this.emit('end')
}