var gulp = require('gulp'),
    connect = require('gulp-connect'),
    chimp = require('gulp-chimp'),
    runSequence = require('run-sequence'),
    scaffolding = require('scaffolding-angular'),
    karma = require('karma').Server;

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function() {
    gulp.src('./app/src/**/*.css')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('./app/src/**/*.js')
        .pipe(connect.reload());
});

gulp.task('vendor-js', function () {
    gulp.src([  'node_modules/angular/angular.js',
                'node_modules/angular-material/angular-material.js',
                'node_modules/angular-animate/angular-animate.js',
                'node_modules/angular-aria/angular-aria.js',])
        .pipe(gulp.dest('./app/assets/js/'));
});

gulp.task('vendor-css', function () {
    gulp.src([  'node_modules/angular-material/angular-material.min.css',
                './app/src/app.css'])
        .pipe(gulp.dest('./app/assets/styles/'));
});

gulp.task('build', function (callback) {
    runSequence(
        'vendor-js',
        'vendor-css',
        callback
    );
});

gulp.task('watch', function() {
    gulp.watch(['./app/src/**/*.css'], ['css']);
    gulp.watch(['./app/src/**/*.js',], ['js']);
    gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('bdd', ['connect'], function() {
    return chimp({
        features: './test/bdd', // Cucumber features files
        browser: 'phantomjs',
        singleRun: true,
        debug: false,
        output: {
            screenshotsPath: './e2e_output/screenshots',
            jsonOutput: './e2e_output/cucumber.json'
        },
        htmlReport: {
            enable: true,
            jsonFile: './e2e_output/cucumber.json',
            output: './e2e_output/report/cucumber.html',
            reportSuiteAsScenarios: true,
            launchReport: true
        }
    });
});

gulp.task('tdd', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: false
    }, function(code) {
        if (code == 1) {
            process.exit(code);
        } else {
            done();
        }
    });
});

gulp.task('scaffolding', function(done){
    scaffolding.appStart();
});

gulp.task('default', ['build', 'connect', 'watch']);
