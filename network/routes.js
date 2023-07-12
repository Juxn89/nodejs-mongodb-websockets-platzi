const express = require('express')

const message = require('../components/messages/network')
const error = require('../components/error/network');
const user = require('../components/user/network');

const routes = (server) => {
  server.use('/message', message)
  server.use('/error', error),
  server.use('/user', user)
}

module.exports = routes