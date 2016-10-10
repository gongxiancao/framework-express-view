'use strict';
var expressLayouts = require('express-ejs-layouts');

function lift () {
  var self = this;
  return new Promise(function (resolve) {
    self.expressApp.set('view engine', 'ejs');
    self.expressApp.use(expressLayouts);
    self.expressApp.set('layout', framework.config.views.layout);
    resolve();
  });
}

module.exports = lift;