module.exports = function () {
  return {
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
