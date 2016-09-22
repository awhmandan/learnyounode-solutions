var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3],
    server = http.createServer((req, res) => {
      var readStream = fs.createReadStream(file);
      
      readStream.on('open', () => {
        readStream.pipe(res);
      });
      
      readStream.on('error', () => {
        res.end(err);
      });
    });

server.listen(port);

//HTTP server that serves the same text file for each request it recieves
//Listens on port provided by first arg
//Location of file provided as second arg
//fs.createReadStream method streams the file contents to the response
//Above method creates a stream representing the file passed as 2nd arg
//The method returns a stream object which you can use src.pipe(dst) to pipe
//the data from the src stream to the dst stream.

/*
OFFICIAL SOLUTION

var http = require('http')  
var fs = require('fs')  
 
var server = http.createServer(function (req, res) {  
 res.writeHead(200, { 'content-type': 'text/plain' })  
 
 fs.createReadStream(process.argv[3]).pipe(res)  
})  
 
server.listen(Number(process.argv[2]))
*/