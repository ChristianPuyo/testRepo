const { Router } = require('express')
const {createPerrosController,
       getAllSPerrosController,
       updatePerrosByIdController,
       deletePerrosByIdController,
       getPerrosByidController
} = require('../controllers/perrosControllers')

const perroRouter = Router()

//INSERTAR xd
perroRouter.post("/", async(req, res)=>{
    const {id,nombre,raza,edad,tiempo,peso } = req.body
    try {
        const newPerro = await createPerrosController({id,nombre,raza,edad,tiempo,peso})
        res.status(201).json(newPerro)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//OBTENER TODOS LOS datos
perroRouter.get("/", async(req, res)=>{
    try {
        const perros =  await getAllSPerrosController()
        res.status(200).json(perros)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// ACTUALIZAR 

perroRouter.put("/:id", async(req, res)=>{
    const {id} = req.params
    const perroData = req.body
    try {
        const  updatedPerro = await updatePerrosByIdController(Dni, perroData)
        if(!updatedPerro){
            return res.status(404).json({error: "Perra no encontrada"})
        }
        res.status(200).json(updatedPerro)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//ELIMINAR
perroRouter.delete("/:id",async(req,res)=>{
    const {id}=req.params
    try {
        const deletePerro=await  deletePerrosByIdController(id)
        if(!deletePerro){
            return res.status(404).json({error: "perra no eliminado"})
        }
        res.status(200).json(deletePerro)

    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
})


//ESTE ES UNA RUTA PARA OBTENER UNA PERRA POR SU ID XD
perroRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const perro = await getPerrosByidController(Dni);

        if (!perro) {
            return res.status(404).json({ error: "perra no encontrado" });
        }

        res.status(200).json(perro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





module.exports={
    perroRouter
}