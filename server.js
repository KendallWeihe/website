const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');

var fs = require('fs');
var https = require('https');
var http = require('http');
var forceSsl = require('express-force-ssl');
var device = require('express-device');

const app = express()

app.set('view engine', 'ejs')
// app.use(forceSsl);
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

app.listen(443, function () {
  console.log('Example app listening on port 443!')
})
