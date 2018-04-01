module.exports = function () {
  return {
    target: {
      main: {
        options: {
          mode: 'gzip'
        },
        files: [{
          expand: true,
          src: ['nojquery.js'],
          dest: 'dist/',
          ext: '.gz.js'
        }]

      }
    }
  }
};
