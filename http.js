
// NOTE: this can be useful for local development 

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`https://${req.headers.host}${req.url}`);
  res.writeHead(301,{Location: `https://${req.headers.host}${req.url}`});
  res.end();
});

server.listen(80);
console.log(`http2https ==> 80:443`);
