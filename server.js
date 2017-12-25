const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');
const log = require('simple-node-logger').createSimpleLogger('info.log');

var fs = require('fs');
var https = require('https');
var forceSsl = require('express-force-ssl');
var device = require('express-device');

var options = {
  key: fs.readFileSync( 'encrypt/kendallweihe.me.key' ),
  cert: fs.readFileSync( 'encrypt/kendallweihe.me.cert' )
};

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(device.capture());

var server = https.createServer( options, app );
server.listen(443, function () {
    console.log( 'Express server listening on port ' + server.address().port );
    log.info( 'Express server listening on port ' + server.address().port );
});

app.get('/', function(req, res) {
  console.log(req.headers);
  log.info(req.headers);
  if (req.get('X-Forwarded-Proto') !== 'https') {
    console.log("Insecure, redirecting...");
    log.info("Insecure, redirecting...");
    res.redirect('https://' + req.get('Host') + req.url);
  }
  else {
    console.log(req.connection.remoteAddress);
    log.info(req.connection.remoteAddress);
    console.log(req.device);
    log.info(req.device);
    console.log(req.device.type.toUpperCase());
    log.info(req.device.type.toUpperCase());
    var device_type = req.device.type.toUpperCase();
    var device_type_enum = 0;
    if (device_type == "PHONE") {
      device_type_enum = 1;
    }
    res.render("home", { device_type : device_type_enum });
  }
})

app.get("/health", function(req, res) {
  res.sendStatus(200);
  res.end();
})
