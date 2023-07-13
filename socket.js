const socketIO = require('socket.io')

const socket = {};

const connect = (server) => {
  socket.id = socketIO(server)
}

module.exports = {
  socket,
  connect
}