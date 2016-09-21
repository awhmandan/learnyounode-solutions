var http = require('http'),
    urls = process.argv.slice(2),
    count = 0,
    responses = [];

urls.forEach(function(url, index) {
  http.get(url, (res) => {
    var totalData = '';

    res.setEncoding('utf8');

    res.on('error', (e) => {
      console.log("Error encountered: " + e);
    });

    res.on('data', (data) => {
      totalData += data;
    });

    res.on('end', () => {
      responses[index] = totalData;
      count++;
      if (count === urls.length) {
        responses.forEach(function(response) {
          console.log(response);
        });
      }
    });
  });
});

//Same as prev challenge, but no need to print char length
//3 get responses - info will be recd async, but needs to printed in correct
//order based on urls passed in

/*
OFFICIAL SOLUTION
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
 for (var i = 0; i < 3; i++)
   console.log(results[i])
}
 
function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
   response.pipe(bl(function (err, data) {
     if (err)
       return console.error(err)

     results[index] = data.toString()
     count++

     if (count == 3)
       printResults()
   }))
 })
}

for (var i = 0; i < 3; i++)
 httpGet(i)
*/
