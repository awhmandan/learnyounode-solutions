module.exports = function (dirToSearch, fileExt, callback) {
  var fs = require('fs'),
      path = require('path'),
      matchesArray = [];

  fs.readdir(dirToSearch, function(err, list) {
    if (err) {
      return callback(err);
    }

    for (var i = 0; i < list.length; i++) {
        if(path.extname(list[i]).substring(1) == fileExt) {
          matchesArray.push(list[i]);
        }
    }

    callback(null, matchesArray);
  });
}
