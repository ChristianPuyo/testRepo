const express = require("express")
const router = require('./Routes/index')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(router)

module.exports = server