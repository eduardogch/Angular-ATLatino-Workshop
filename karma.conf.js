module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            // Vendor files
            'app/assets/js/angular.min.js',
            'app/assets/js/angular-animate.min.js',
            'app/assets/js/angular-aria.min.js',
            'app/assets/js/angular-material.min.js',
            // Source files
            'app/src/app.module.js',
            'app/src/**/*.module.js',
            'app/src/**/*.js',
            // Test files
            'test/tdd/**/*.spec.js',
            'test/tdd/spec-helper.js',
        ],
        exclude: [],
        preprocessors: {
            'app/src/**/*.js': ['coverage']
        },
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage',
            subdir: 'PhantomJS'
        },
        dest: __dirname + 'coverage/PhantomJS',
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity
    });
};
