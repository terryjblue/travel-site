var gulp = require ('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(done) {
	console.log("Hooray - you created a Gulp task.");
	done();
});

gulp.task('html', function(done) {
	console.log("Imagine something useful being done to your HTML here.");
	done();
});

gulp.task('styles', function() {
	 return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(done) {
	gulp.watch('./app/index.html', function() {
		gulp.start('html');
	});

	gulp.watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
	done();
});