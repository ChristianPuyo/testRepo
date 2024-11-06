const server = require('./server')

db = require('./models/index')


db.sequelize.sync({alter: true})
    .then(()=>{
        server.listen(3001, ()=>{
            console.log('server listening on port 3001');
        })
    })
.catch(err=>console.log("error al sincronizar" ,err.message))