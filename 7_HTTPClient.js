var http = require('http'),
    url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');

  res.on('error', (e) => {
    console.log("Error encountered: " + e);
  });

  res.on('data', (data) => {
    console.log(data);
  });
});

//HTTP GET request to provided url
//Logs each data event emitted on the res stream object
//setEncoding also converts data to utf8 instead of leaving as Node Buffer objects

/*
OFFICIAL SOLUTION

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')  
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

*/
