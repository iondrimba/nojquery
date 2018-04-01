module.exports = function () {
  return {
    target: {
      default_options: {
        bsFiles: {
          src: ['*.js', '*.html']
        },
        options: {
          watchTask: true,
          server: {
            baseDir: ''
          }
        }
      }
    }
  }
};
