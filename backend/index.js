const server = require('./server')
const db = require('./models/index')

db.sequelize.sync({alter: true})
  .then(()=>{
    server.listen(3001, ()=>{
        console.log('Server Open'); 
        
    })
  })
  .catch(err=> console.log('Error Server',err.message))

