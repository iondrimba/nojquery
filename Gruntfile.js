module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*'
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
                tasks: ['eslint']
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
            }
        },
        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },

            dev: {
                // LCOV coverage file (can be string, glob or array)
                src: 'spec/javascripts/fixtures/*.info'
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
