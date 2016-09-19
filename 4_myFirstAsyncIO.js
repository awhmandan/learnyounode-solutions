var fs = require('fs'),
    filePath = process.argv[2],
    splitFileArray;

fs.readFile(filePath, 'utf8', function(err, data) {
  if (err) {
    throw err;
  }

  splitFileArray = data.split('\n');

  displayResult(splitFileArray);

});

function displayResult(data) {
  console.log(data.length - 1);
}

//purpose - take file as arg, count & print no. of \n it contains
//ASYNC VERSION OF PREV CHALLENGE


//takes file & path as third arg
//reads file & converts contents to a string
//splits string to arrays, splitting at each \n
//returns array, length of which is one longer than number of \n in file

/*
OFFICIAL solution

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
 // fs.readFile(file, 'utf8', callback) can also be used
 var lines = contents.toString().split('\n').length - 1
 console.log(lines)
})
*/
