const { Router } = require('express')
const { perroRouter } = require('./perrosRoutes')

const router = Router()

router.use('/perros', perroRouter)

module.exports = router;
