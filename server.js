var http = require("http");
var path = require("path");
var express = require("express");
var app = express();
var server = http.createServer(app);

app.get('/api/whoami', function(req, res) {
  console.log('whoami reached.');
  
  var request = { ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"] };
  
  res.end(JSON.stringify(request));
});

app.use(express.static(path.resolve(__dirname, 'client')));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Header Parser server listening at", addr.address + ":" + addr.port);
});
