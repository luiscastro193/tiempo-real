"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {transports: ['websocket']});

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	socket.on('message', function(msg) {
		io.emit('message', msg);
	});
});

http.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});
