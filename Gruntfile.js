module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
    });

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open: true,
                    base: {
                        path: '.',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            prod: {
                files: {
                    'dist/nojquery.js': ['nojquery.js']
                }
            }
        },
        watch: {
            options: {
                spawn: false,
                reload: true,
                livereload: true
            },
            scripts: {
                files: ['nojquery.js', 'Gruntfile.js', 'demo.js'],
                tasks: ['eslint', 'uglify']
            },
            html: {
                files: ['index.html'],
            }
        },
        eslint: {
            target: ['nojquery.js', 'Gruntfile.js', 'demo.js']
        },
        jasmine: {
            src: 'nojquery.js',
            options: {
                specs: 'spec/*.js',
                vendor: 'spec/vendors/jquery.js',
                helpers: 'spec/vendors/jasmine-jquery.js'
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
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                src: 'bin/coverage/lcov/lcov.info',
                force: false
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test', ['jasmine', 'coveralls']);
    grunt.registerTask('default', ['connect', 'watch']);

};
