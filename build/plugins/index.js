const unplugins = require('./unplugins');

module.exports = function setupPlugins() {
  return [...unplugins()];
};
