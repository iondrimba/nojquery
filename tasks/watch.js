module.exports = function () {
  return {
    target: {
      options: {
        spawn: false,
        reload: true,
        livereload: true
      },
      scripts: {
        files: ['nojquery.js', 'Gruntfile.js', 'demo.js'],
        tasks: ['eslint', 'uglify', 'compress']
      },
      html: {
        files: ['index.html'],
      }
    }
  }
};
