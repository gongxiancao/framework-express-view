```
'use strict';
process.chdir(__dirname);
var ofa = require('ofa')(); // jshint ignore:line

module.exports = ofa
.use('ofa-env')
.use('ofa-config')
.use('ofa-service')
.use('ofa-controller')
.use('ofa-express')
.use('ofa-express-view') // view need be used before route
.use('ofa-express-policy')
.use('ofa-express-route')
.lift()
.listen()
.on('error', function (err) {
  logger.error(err.stack);
  return process.exit(1);
})
.on('listened', function () {
  /*jshint multistr: true */
  logger.info('Portal started at port ' + ofa.config.port + ', env=' + ofa.environment);
});
```
