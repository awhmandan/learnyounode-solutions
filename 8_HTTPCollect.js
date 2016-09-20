var http = require('http'),
    url = process.argv[2],
    count = 0,
    responseChars = '';

http.get(url, (res) => {
  res.setEncoding('utf8');

  res.on('error', (e) => {
    console.log("Error encountered: " + e);
  });

  res.on('data', (data) => {
    count += data.length;
    responseChars += data;
  });

  res.on('end', () => {
    console.log(count);
    console.log(responseChars);
  });
});

//Same as prev exercise, but multiple data events - on comletion need to
//log number of characters in total from responses, and log concatenated
//string of responses

/*
OFFICIAL SOLUTION

var http = require('http')
var bl = require('bl')
 
http.get(process.argv[2], function (response) {
 response.pipe(bl(function (err, data) {
   if (err)
     return console.error(err)
   data = data.toString()
   console.log(data.length)
   console.log(data)
 }))
})

*/
