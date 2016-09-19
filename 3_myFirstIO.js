var fs = require('fs'),
    filePath = process.argv[2]
    stringFile = fs.readFileSync(filePath).toString(),
    splitFileArray = stringFile.split('\n');

console.log(splitFileArray.length - 1);


//purpose - take file as arg, count & print no. of \n it contains

//takes file & path as third arg
//reads file & converts contents to a string
//splits string to arrays, splitting at each \n
//returns array, length of which is one longer than number of \n in file


/*
Offical solution

var fs = require('fs')

     var contents = fs.readFileSync(process.argv[2])
     var lines = contents.toString().split('\n').length - 1
     console.log(lines)

     // note you can avoid the .toString() by passing 'utf8' as the
     // second argument to readFileSync, then you'll get a String!
     //
     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/
