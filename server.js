const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');

var fs = require('fs');
var https = require('https');
var http = require('http');
var forceSsl = require('express-force-ssl');
var device = require('express-device');

const app = express()

// var key = fs.readFileSync('encrypt/private.key');
// var cert = fs.readFileSync( 'encrypt/kendallweihe.me.crt' );
// var ca = fs.readFileSync( 'encrypt/kendallweihe.me.ca.crt' );
//
// var options = {
//   key: key,
//   cert: cert,
//   ca: ca
// };

var privateKey  = fs.readFileSync('encrypt/private.key', 'utf8');
var certificate = fs.readFileSync('encrypt/kendallweihe.me.crt', 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate
};

app.set('view engine', 'ejs')
app.use(forceSsl);
app.use(express.static(__dirname + '/public'))
app.use(device.capture());

app.get('/', function (req, res) {
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

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

// var https = require('https');
// https.createServer(options, app).listen(3001);

// app.listen(3001, function () {
//   console.log('Example app listening on port 3000!')
// })
