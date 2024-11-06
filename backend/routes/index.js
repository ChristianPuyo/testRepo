const { Router } = require('express');

const dogRouter = require('./dogRoutes'); // Importa el nuevo enrutador de perros

const router = Router();

// Usa los diferentes enrutadores bajo sus respectivos prefijos

router.use('/dog', dogRouter); // Usa el dogRouter bajo el prefijo '/dogs'

module.exports = router;