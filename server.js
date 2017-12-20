const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');

var fs = require('fs');
var device = require('express-device');
var forceSsl = require('express-force-ssl');

const app = express()

var key = fs.readFileSync('encrypt/private.key');
var cert = fs.readFileSync( 'encrypt/kendallweihe.me.crt' );
var ca = fs.readFileSync( 'encrypt/kendallweihe.me.ca.crt' );

var options = {
  key: key,
  cert: cert,
  ca: ca
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

var https = require('https');
https.createServer(options, app).listen(3001);

// app.listen(3001, function () {
//   console.log('Example app listening on port 3000!')
// })
