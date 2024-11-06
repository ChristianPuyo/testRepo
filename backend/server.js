const express = require('express');
const router = require('./routes/index')
const cors = require('cors')
const morgan =  require('morgan')


const server = express() 
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())//convierte la info en un objeto de js



server.use(router)

module.exports = server

