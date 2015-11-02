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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['connect', 'watch']);

};
