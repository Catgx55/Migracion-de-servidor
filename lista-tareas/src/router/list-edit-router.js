const express = require('express');
const listaTareas = require('../lista');
const valueBody = require('../middleware/valueBody');
const valueInfor = require('../middleware/valueInfor');
const router = express.Router();

//router.use("/:idTarea",valuePut);


//Crear tareas
router.post('/crearTarea', valueBody, valueInfor, (req, res) => {
    const tareaNueva = req.body;
    listaTareas.push(tareaNueva);
    res.status(200).json("tarea añadida exitosamente");
});

//eliminar tarea, correccion de codigo segun recomendaciones.
router.delete('/eliminar/:idTarea', (req, res) => {
    const id = req.params.idTarea;
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    if(indexTarea > 0){
        const eliminarTarea = listaTareas.splice(indexTarea, 1)[0];
        res.status(200).json({eliminarTarea});
    }else{
        res.status(400).json("la tarea no existe");
    }
});

//actualizar tarea
router.put('/actualizar/:idTarea', valueBody, valueInfor, (req, res) => {
    const id = req.params.idTarea;
    const tarea = req.body
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    if(indexTarea > 0){
        listaTareas[indexTarea] = tarea
        res.status(200).json("tarea modificada exitosamente");
    }else{
        res.status(400).json("la tarea no existe");
    }
});

module.exports = router;