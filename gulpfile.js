var gulp = require('gulp'),
    connect = require('gulp-connect'),
    chimp = require('gulp-chimp'),
    runSequence = require('run-sequence'),
    scaffolding = require('scaffolding-angular'),
    karma = require('karma').Server;

gulp.task('default', function() {
    runSequence(
        'build',
        'connect',
        'watch'
    );
});

gulp.task('watch', function() {
    gulp.watch(['./source/app/**/*.js'], ['source-js']);
    gulp.watch(['./source/app/**/*.css', ], ['source-css']);
    gulp.watch(['./source/app/**/*.html'], ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

gulp.task('vendor-css', function() {
    return gulp.src('./node_modules/angular-material/angular-material.min.css')
        .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('vendor-js', function() {
    return gulp.src(['./node_modules/angular/angular.js',
            './node_modules/angular-material/angular-material.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-aria/angular-aria.js'
        ])
        .pipe(gulp.dest('./public/assets/js'));
});

gulp.task('images', function() {
    return gulp.src('./source/svg/**/*')
        .pipe(gulp.dest('./public/assets/svg/'));
});

gulp.task('html', function() {
    gulp.src('./source/app/**/*.html')
        .pipe(gulp.dest('./public/'))
        .pipe(connect.reload());
});

gulp.task('source-css', function() {
    gulp.src('./source/app/**/*.css')
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(connect.reload());
});

gulp.task('source-js', function() {
    gulp.src('./source/app/**/*.js')
        .pipe(gulp.dest('./public/assets/js'))
        .pipe(connect.reload());
});

gulp.task('build', function(callback) {
    runSequence(
        'vendor-css',
        'vendor-js',
        'images',
        'html',
        'source-css',
        'source-js',
        callback
    );
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

gulp.task('scaffolding', function(done) {
    scaffolding.appStart();
});
