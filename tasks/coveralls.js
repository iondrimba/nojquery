module.exports = function(grunt) {

    return task = {
        target: {
            options: {
                src: 'bin/coverage/lcov/lcov.info',
                force: false
            },
            test: {
                src: 'bin/coverage/lcov/*.info'
            }
        }
    }
};