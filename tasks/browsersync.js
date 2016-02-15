module.exports = function(grunt) {

    return task = {
        target: {
            default_options: {
                bsFiles: {
                    src: ['*.js', '*.html']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: ""
                    }
                }
            }
        }
    }
};