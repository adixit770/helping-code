const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile("index.html");
});

io.on('connection', function(socket) {
   console.log('A user connected');

   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
});

http.listen(8800, function() {
   console.log('listening on *:8800');
});