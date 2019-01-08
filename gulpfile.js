var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create();

/*gulp.task('default', function(done) {
	console.log("Hooray - you created a Gulp task.");
	done();
});*/

/*gulp.task('html', function(done) {
	console.log("Imagine something useful being done to your HTML here.");
	done();
});

gulp.task('styles', function() {
	 return gulp.src('./app/assets/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});*/

/*gulp.task('watch', function() {
	return gulp.watch('./app/index.html', function() {
		console.log("Imagine something useful being done to your HTML here.");

	});

});*/

gulp.task('watch', function() {
	browserSync.init({
		server: {
			notify: false,
			baseDir: "app"
		}

	});

	/*return watch('./app/index.html', function() {
		browserSync.reload();
	});*/

	return watch('./app/assets/styles/**/*.css', function() {
		gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest('./app/temp/styles'));

		/*gulp.src('./app/temp/styles/styles.css')
			.pipe(browserSync.stream());*/
	});
});