const {Router} = require('express')
const {perroRouter} = require('../routes/perrosRoutes')

const router  = Router()

router.use('/perro',perroRouter)
//router.use('/course', courseRoter)
//router.use('/teacher', teacherRouter)
//router.use('/exam', examRouter)


module.exports = router;
