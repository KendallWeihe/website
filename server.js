const express = require('express');
const util = require('util')
const AWS = require('aws-sdk');

const app = express()

// app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render("index");
})




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
