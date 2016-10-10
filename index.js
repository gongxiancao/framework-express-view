'use strict';
function lift () {
  var self = this;
  return new Promise(function (resolve) {
    self.expressApp.set('view engine', framework.config.views.engine);
    resolve();
  });
}

module.exports = lift;