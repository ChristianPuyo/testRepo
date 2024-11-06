const {Router} = require('express')
const {studentRouters} = require('../routes/studentRoutes')

//const { Course } = require('../models')
// creamos el enrutador
const router = Router()
router.use('/student',studentRouters)


module.exports = router