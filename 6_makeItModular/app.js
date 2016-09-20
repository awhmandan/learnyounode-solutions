var searchModule = require('./dirSearch'),
    dir = process.argv[2],
    ext = process.argv[3];

searchModule(dir, ext, function(err, data) {
  if (err) {
    console.log("Error: " + err);
  }

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});

//Same challenge as prev, but introducing modularity - function logical
//moved to seperate file


/*
OFFICIAL SOLUTION

_/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
  on/solution.js_ :

     var filterFn = require('./solution_filter.js')
     var dir = process.argv[2]
     var filterStr = process.argv[3]

     filterFn(dir, filterStr, function (err, list) {
       if (err)
         return console.error('There was an error:', err)

       list.forEach(function (file) {
         console.log(file)
       })
     })

 ─────────────────────────────────────────────────────────────────────────────
  _/usr/local/lib/node_modules/learnyounode/exercises/make_it_modular/soluti
  on/solution_filter.js_ :

     var fs = require('fs')
     var path = require('path')

     module.exports = function (dir, filterStr, callback) {

       fs.readdir(dir, function (err, list) {
         if (err)
           return callback(err)

         list = list.filter(function (file) {
           return path.extname(file) === '.' + filterStr
         })

         callback(null, list)
       })
     }

*/
