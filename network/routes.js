const express = require('express')

const message = require('../components/messages/network')
const error = require('../components/error/network');

const routes = (server) => {
  server.use('/message', message)
  server.use('/error', error)
}

module.exports = routes