module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    open:true,
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('default', ['connect', 'watch']);

};