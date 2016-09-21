var net = require('net'),
    port = process.argv[2],
    server = net.createServer((socket) => {
      var timeNow = '';

      var date = new Date();
      var y = date.getFullYear();
      var mo = date.getMonth() + 1;
      var d = date.getDate();
      var h = date.getHours();
      var mi = date.getMinutes();

      if (d < 10) {
        d = '0' + d;
      }

      if (mo < 10) {
        mo = '0' + mo;
      }

      if (h < 10) {
        h = '0' + h;
      }

      if (mi < 10) {
        mi = '0' + mi;
      }

      timeNow = y + '-' + mo + '-' + d + ' ' + h + ':' + mi + '\n';

      socket.end(timeNow);
    });

server.listen(port);

//TCP server

//The function that you need to pass to net.createServer() is a
//connection listener that is called more than once. Every connection
//received by your server triggers another call to the listener.

//Listens to TCP connections on port passed as first arg
//For each connection, needs to return current time in format "YYYY-MM-DD hh:mm"
//closing connection after sending date string

/*
OFFICIAL SOLUTION

var net = require('net')
       
function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
}

function now () {
 var d = new Date()
 return d.getFullYear() + '-'
   + zeroFill(d.getMonth() + 1) + '-'
   + zeroFill(d.getDate()) + ' '
   + zeroFill(d.getHours()) + ':'
   + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/



