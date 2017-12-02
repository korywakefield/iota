// =============================================================================
// GULPFILE.JS
// -----------------------------------------------------------------------------
// Build scripts.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Includes
//   02. Styles
//   03. Watch
//   04. Default
// =============================================================================

// Includes
// =============================================================================

var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');
var watch  = require('gulp-watch');
var notify = require('gulp-notify');



// Styles
// =============================================================================

gulp.task('styles', function() {
  sass('./scss/*.scss', {style : 'expanded', sourcemap : false})
    .on('error', function(err) { console.error('Error', err.message); })
    .on('error', notify.onError(function(error) { return error.message; }))
    .pipe(gulp.dest('./'))
    .pipe(notify({
      title   : "Iota",
      message : "<%= file.relative %> compiled",
      sound   : false,
    }));
});



// Watch
// =============================================================================

gulp.task('watch', function() {
  gulp.watch(['./scss/**/*.scss'], ['styles']);
});



// Default
// =============================================================================

gulp.task('default', ['watch']);