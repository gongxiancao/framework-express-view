'use strict';
var ejsLayoutChain = require('ejs-layout-chain');

function lift () {
  var self = this;
  return new Promise(function (resolve) {
    self.expressApp.set('view engine', 'ejs');
    self.expressApp.use(ejsLayoutChain);
    self.expressApp.set('layout', ofa.config.views.layout);
    resolve();
  });
}

module.exports = lift;
