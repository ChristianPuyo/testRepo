const express = require('express')
const router = require('./routes/index')

const server = express()

server.use(express.json())
server.use(router)

module.exports = server
