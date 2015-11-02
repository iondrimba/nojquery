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
        watch: {
            options: {
                spawn: false,
                reload: true,
                livereload: true
            },
            scripts: {
                files: ['NoJQuery.js', 'Gruntfile.js', 'demo.js'],
                tasks: ['eslint']
            },
            html: {
                files: ['index.html'],
            }
        },
        eslint: {
            target: ['NoJQuery.js', 'Gruntfile.js', 'demo.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    // Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);

};
