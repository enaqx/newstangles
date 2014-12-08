/**
 * Web server
 */

var express = require('express');
var serveStatic = require('serve-static');
var app = express();


/* Server settings */
app.set('port', 3000);


app.use(serveStatic('public/', {'index': ['index.html']}));


var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Start Newstangles server at http://%s:%s', host, port)

})