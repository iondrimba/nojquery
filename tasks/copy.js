module.exports = function () {
  return {
    target: {
      main: {
        src: 'node_modules/requirejs/require.js',
        dest: 'require.js',
      }
    }
  }
};
