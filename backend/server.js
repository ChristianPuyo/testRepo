// creamos el servidor
const express= require('express')
const router = require('./routes/index')
const  cors= require('cors')
const morgan = require('morgan')

const server = express()
// traformamos de objetos json
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())// convierte un objeto de json

server.use(router)

module.exports =server

