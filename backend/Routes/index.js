const {Router} = require('express')
const {DogRouter} = require('../Routes/DogRoutes')

const router = Router()

router.use('/dog', DogRouter)

module.exports = router
