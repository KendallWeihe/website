const express = require('express');
const log = require('simple-node-logger').createSimpleLogger('info.log');

// // NOT CURRENTLY USED
// const util = require('util')
// const AWS = require('aws-sdk');

var fs = require('fs');
var https = require('https');
var device = require('express-device');

var key = process.env.KEY;
var cert = process.env.CERT;
console.log("KEY: ", key);
console.log("CERT: ", cert);
var options = {
  key: fs.readFileSync(key),
  cert: fs.readFileSync(cert)
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
  if (req.headers.host !== "localhost" && req.get('X-Forwarded-Proto') !== 'https') {
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

app.get('/portfolio', function(req, res) {
  console.log(req.headers);
  log.info(req.headers);
  if (req.headers.host !== "localhost" && req.get('X-Forwarded-Proto') !== 'https') {
    console.log("Insecure, redirecting...");
    log.info("Insecure, redirecting...");
    res.redirect('https://' + req.get('Host') + req.url);
  }
  else {
    var device_type = req.device.type.toUpperCase();
    var device_type_enum = 0;
    if (device_type == "PHONE") {
      device_type_enum = 1;
    }
    res.render("portfolio", { device_type : device_type_enum });
  }
})

app.get("/health", function(req, res) {
  res.sendStatus(200);
  res.end();
})