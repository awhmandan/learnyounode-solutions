var http = require('http'),
    urlMod = require('url'),
    port = process.argv[2];
    
var server = http.createServer((req, res) => {  
  if(req.method != 'GET') {
    res.end('Server accepts only GET requests');
  } else {
    var path = urlMod.parse(req.url, true).pathname;
    var query = urlMod.parse(req.url, true).query.iso;
    
    var date = new Date(query),
        unix = date.getTime(),
        jsonResponse = {
          'hour': date.getHours(),
          'minute': date.getMinutes(),
          'second': date.getSeconds()
        };
    
    res.writeHead(200, {'Content-Type': 'application/json'});

    if(path == '/api/parsetime') {
      res.end(JSON.stringify(jsonResponse));
    } else {
      res.end(JSON.stringify({unixtime: unix}));
    }
  }
  
});

server.listen(port);



//HTTP server, serves JSON data when GET request recd to path '/api/parsetime'
//Expects query string with key 'iso' and ISO-format time as the value
//e.g. /api/parsetime?iso=2013-08-10T12:10:15.474Z
/*

response should follow below format:

{  
 "hour": 14,  
 "minute": 23,  
 "second": 15  
}

*/

//Second endpoint exists for path '/api/unixtime'
//Accepts same query string but returns Unix epoch time
//Format: { "unixtime": 1376136615474 }


/*
OFFICIAL SOLUTION

var http = require('http')  
var url = require('url')  
 
function parsetime (time) {  
 return {  
   hour: time.getHours(),  
   minute: time.getMinutes(),  
   second: time.getSeconds()  
 }  
}  
 
function unixtime (time) {  
 return { unixtime : time.getTime() }  
}  
 
var server = http.createServer(function (req, res) {  
 var parsedUrl = url.parse(req.url, true)  
 var time = new Date(parsedUrl.query.iso)  
 var result  
 
 if (/^\/api\/parsetime/.test(req.url))  
   result = parsetime(time)  
 else if (/^\/api\/unixtime/.test(req.url))  
   result = unixtime(time)  
 
 if (result) {  
   res.writeHead(200, { 'Content-Type': 'application/json' })  
   res.end(JSON.stringify(result))  
 } else {  
   res.writeHead(404)  
   res.end()  
 }  
})  
server.listen(Number(process.argv[2]))
*/
