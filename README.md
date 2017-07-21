# Arkadin-Workshop

Create your Apigee account: https://login.apigee.com/sign_up

--- An API proxy from SOAP service ---

SOAP service for testing:
http://www.webservicex.com/New/Home/ServiceDetail/56
http://www.webservicex.com/globalweather.asmx?wsdl

--- An API proxy from specification ---

The Arkadin specifications: https://app.swaggerhub.com/search?query=%20arkadin

The JSON specification for the Subsidiaries API:
https://app.swaggerhub.com/apiproxy/schema/file/arkadin_api/Subsidiaries/1.0.0/swagger.json

Test an Rest API: 
https://jsonplaceholder.typicode.com/

--- An API proxy with Node.js ---

Node.js tutorial: https://www.w3schools.com/nodejs/

Example Node.js code:
var http = require('http');

console.log('Version.js application starting...');

var respVersion = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><root><version>Arkadin Customers API v0.5</version></root>";

var svr = http.createServer(function(req, resp) {
    resp.setHeader('Content-Type', 'application/xml');
    resp.end(respVersion);
});

svr.listen(9000, function() {
    console.log('Node Version HTTP server is listening');
});
