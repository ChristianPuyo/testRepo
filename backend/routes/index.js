const {Router} = require('express')
const {studentRouter} = require('../routes/DogsRoutes')

const router  = Router()

router.use('/dog',studentRouter)


module.exports = router;