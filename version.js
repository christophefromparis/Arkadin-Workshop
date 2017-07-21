var http = require('http');

console.log('Version.js application starting...');

var respVersion = "Arkadin Customers API v0.5";

var svr = http.createServer(function(req, resp) { resp.setHeader('Content-Type', 'application/xml'); resp.end(respVersion); });

svr.listen(9000, function() { console.log('Node Version HTTP server is listening'); });
