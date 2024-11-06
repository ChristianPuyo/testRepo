const server = require('./server')
const db = require('./models/index')
// modifica 
db.sequelize.sync({alter:true})
   .then(()=>{
      server .listen(3001, ()=>{
        console.log('server listening on port 3001')
    })
   }) 
   .catch(err=> console.log('error al soncronizar', err.message))
