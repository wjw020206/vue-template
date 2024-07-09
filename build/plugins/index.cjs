const unplugins = require('./unplugins.cjs');

module.exports = function setupPlugins() {
  return [...unplugins()];
};
