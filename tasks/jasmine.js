module.exports = function(grunt) {

    return task = {
        target: {
            src: 'nojquery.js',
            options: {
                specs: 'spec/*.js',
                vendor: 'spec/vendors/jquery.js',
                helpers: 'spec/helpers/*.js'
            },
            coverage: {
                src: ['nojquery.js'],
                options: {
                    specs: ['spec/*.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: {
                            type: 'lcov',
                            options: {
                                dir: 'bin/coverage/lcov'
                            }
                        }
                    }
                }
            }
        }
    }
};