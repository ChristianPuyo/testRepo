const {Router} = require('express')
const {studentRouter} = require('../routes/DogsRoutes')

const router  = Router()

router.use('/dogs',studentRouter)


module.exports = router;