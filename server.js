const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');
var device = require('express-device');

const app = express()

// app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(device.capture());

app.get('/', function (req, res) {
  console.log(req.device.type.toUpperCase());
  var device_type = req.device.type.toUpperCase();
  var device_type_enum = 0;
  if (device_type == "PHONE") {
    device_type_enum = 1;
  }
  res.render("home", { device_type : device_type_enum });
})




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
