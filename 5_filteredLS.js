var fs = require('fs'),
    path = require('path'),
    dirToSearch = process.argv[2],
    fileExt = process.argv[3],
    matchesArray = [];

fs.readdir(dirToSearch, function(err, list) {
  if (err) {
    throw(err);
  }

  for (var i = 0; i < list.length; i++) {
      if(path.extname(list[i]).substring(1) == fileExt) {
        matchesArray.push(list[i]);
      }
  }

  for (var j = 0; j < matchesArray.length; j++) {
    console.log(matchesArray[j]);
  }
});

//TAKES DIR OF FILES AS FIRST ARG, FILE EXTENSION AS SECOND ARG
//Needs to print only filenames that end with provided file EXTENSION

/*
"CHANGELOG.md"                      ==    "CHANGELOG.md"
"LICENCE.md"                        ==    "LICENCE.md"
"README.md"                         ==    "README.md"
""                                  ==    ""
*/

/*
var fs = require('fs')
var path = require('path')
 
var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function(file) {
     if (path.extname(file) === ext) {
         console.log(file)
     }
 })
})
*/
