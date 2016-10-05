/**
 * Created by sachinPc on 10/3/2016.
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var path  = require('path');
var route = require('./server');
var multer = require('multer');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'views', 'index.html'));
});



app.use(multer({
    dest: path.join(__dirname, 'public/assets/img/profile'),
    rename: function (fieldname, filename, req, res) {
     return "abs";
    }
}));
app.use('/', route);
//app.listen(3000);

io.sockets.on('connection',function(socket){
    socket.on('send Msg', function(data){
        console.log("sasa");
        io.sockets.emit('get Msg', "sasa");

    })

})
server.listen(3000);
module.exports = app;


