module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'public/assets/js/angular.js',
            'public/assets/js/angular-animate.js',
            'public/assets/js/angular-aria.js',
            'public/assets/js/angular-material.js',
            'public/assets/js/app.module.js',
            'public/assets/js/**/*.module.js',
            'public/assets/js/**/*.js',
            'source/test/tdd/**/*.spec.js',
            'source/test/tdd/spec-helper.js',
        ],
        exclude: [],
        preprocessors: {
            'source/app/**/*.js': ['coverage']
        },
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage'
        },
        dest: __dirname + 'coverage',
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    });
};
