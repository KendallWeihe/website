const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');

var fs = require('fs');
var https = require('https');
var http = require('http');
var forceSsl = require('express-force-ssl');
var device = require('express-device');

var options = {
  key: fs.readFileSync( 'encrypt/kendallweihe.me.key' ),
  cert: fs.readFileSync( 'encrypt/kendallweihe.me.cert' ),
  requestCert: false,
  rejectUnauthorized: false
};

const app = express()

app.set('view engine', 'ejs')
// app.use(forceSsl);
app.use(express.static(__dirname + '/public'))
app.use(device.capture());

var server = https.createServer( options, app );
server.listen(443, function () {
    console.log( 'Express server listening on port ' + server.address().port );
});

app.get('/', function(req, res) {
  if(req.get('X-Forwarded-Proto') !== 'https') {
    console.log("Insecure, redirecting...");
    res.redirect('https://' + req.get('Host') + req.url);
  }

  console.log(req.headers);
  console.log(req.connection.remoteAddress);
  console.log(req.device);
  console.log(req.device.type.toUpperCase());
  var device_type = req.device.type.toUpperCase();
  var device_type_enum = 0;
  if (device_type == "PHONE") {
    device_type_enum = 1;
  }
  res.render("home", { device_type : device_type_enum });
})

app.get("/health", function(req, res) {
  res.sendStatus(200);
  res.end();
})
