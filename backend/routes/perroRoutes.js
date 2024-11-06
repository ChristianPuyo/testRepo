const { Router } = require("express");
const {
  createPerroController,
  getAllPerroController,
  deletePerroController,
  updatePerroByIdController,
  getPerroByIdController
} = require("../controllers/perroControllers");

const perroRouter = Router();

//INSERTAR UN ESTUDIANTE
perroRouter.post("/", async (req, res) => {
  const { id_perro, raza, esperanzaVida, origen, peso } = req.body;
  try {
    const newPerro = await createPerroController({
      id_perro,
      raza,
      esperanzaVida,
      origen,
      peso,
    });
    res.status(201).json(newPerro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//ESTE ES EL METODO PARA OBTENER TODOS LOS ESTUDIANTES
perroRouter.get("/", async (req, res) => {
  try {
    const perros = await getAllPerroController();
    res.status(200).json(perros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//ESTE ES LA RUTA  PARA ACTUALIZAR UN perro
//creamos la ruta para actualizar
perroRouter.put('/:id_perro',async(req, res) => {
    const {id_perro} = req.params
    const perroData = req.body
    try {
        const updatePerro = await updatePerroByIdController(id_perro,perroData)
        if(!updatePerro){
        res.status(404).json({message:'Perro not found'})
        }
        res.status(200).json(updatePerro)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})

//ESTE ES LA RUTA PARA ELIMINAR UN ESTUDIANTE
//creamos la ruta para eliminar
perroRouter.delete('/:id_perro',async(req, res) => {
    const {id} = req.params
    try {
        const deletePerros = await deletePerroController(id)
        if(!deletePerros){
            res.status(404).json({error:'Dogs not found'})
            }
        res.status(200).json({message:"Dog deleted successfully"})
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
})

perroRouter.get("/:id_perro", async (req, res) => {
  const { id_perro } = req.params;

  try {
      const perro = await getPerroByIdController(id_perro);

      if (!perro) {
          return res.status(404).json({ error: "Perro no encontrado" });
      }

      res.status(200).json(perro);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


module.exports = {
  perroRouter,
};
