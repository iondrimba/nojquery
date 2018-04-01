module.exports = function () {
  return {
    target: {
      options: {
        src: 'coverage/lcov.info',
        force: false
      },
      test: {
        src: 'coverage/*.info'
      }
    }
  }
};
