const express = require('express');
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.emit('message', 'Welcome! :)')
})

setInterval(() => {
  io.emit('message', 'Hi everyone!, I am sending a new message')
}, 3000);

server.listen(8080, () => {
  console.log(`Server up on http:\\localhost:8080`);
})