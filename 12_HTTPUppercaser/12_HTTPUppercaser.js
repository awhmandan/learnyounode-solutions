var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];
    
var server = http.createServer((req, res) => {
  if(req.method != 'POST') {
    return res.end('Server responds to POST requests only.');
  }

  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);

});
    
server.listen(port);


//HTTP server that listens on port provided
//Responds only to POST requests
//Takes incoming requests and returns them uppercase
//through2-map module works similarly to Array.map, adding this functionality
//to create a transform stream in this instance

/*
OFFICIAL SOLUTION

var http = require('http')  
var map = require('through2-map')  
 
var server = http.createServer(function (req, res) {  
 if (req.method != 'POST')  
   return res.end('send me a POST\n')  
 
 req.pipe(map(function (chunk) {  
   return chunk.toString().toUpperCase()  
 })).pipe(res)  
})  
 
server.listen(Number(process.argv[2]))
*/