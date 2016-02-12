module.exports = function(grunt) {

    return task = {
        target: {
            options: {
                mangle: false
            },
            prod: {
                files: {
                    'dist/nojquery.js': ['nojquery.js']
                }
            }
        }
    }
};