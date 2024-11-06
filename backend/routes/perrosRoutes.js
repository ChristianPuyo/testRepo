// perrosRoutes.js
const { Router } = require('express');
const { createPerroController, getAllPerrosController } = require('../controlers/perrosControlers'); // Asegúrate de la ruta correcta

const perroRouter = Router();

// Ruta POST para crear un nuevo perro
perroRouter.post("/", async (req, res) => {
  const { id_perro, raza, esperanza_vida, origen, peso } = req.body;
  try {
    // Llamamos al controlador para crear el perro
    const newPerro = await createPerroController({ id_perro, raza, esperanza_vida, origen, peso });
    res.status(201).json(newPerro);  // Enviamos el perro creado como respuesta
  } catch (error) {
    res.status(400).json({ error: error.message });  // En caso de error, enviamos un mensaje
  }
});

//RUTA PARA OBTENER TODOS LOS PERROS
perroRouter.get("/", async (req, res) => {
    try {
        const perros = await getAllPerrosController();
        res.status(200).json(perros)
    }catch (error) {
                res.status(400).json({error: error.message})
            }
})


// studentRouter.get("/", async(req, res)=>{
//     try {
//         const students =  await getAllStudentsController()
//         res.status(200).json(students)

//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })

module.exports = { perroRouter };
