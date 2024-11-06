const server = require('./server')
const db = require('./models/index')

db.sequelize.sync({alert:true})
    .then(()=>{
        server.listen(3001,()=>{
        console.log('server listening on port 3001')
    })
})
.catch(err=>console.log('Error al sincronizar Base de datos',err.messagge))

        





