const path = require('path');

module.exports = {
  web: {},
  logging: {
    appenders: {
      console: { type: 'console' }
    },
    categories: {
      default: {
        appenders: ['console'],
        level: "error"
      }
    }
  }
};
