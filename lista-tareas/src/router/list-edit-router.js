const express = require('express');
const listaTareas = require('../lista');
const valuePost = require('../middleware/valuePost');
const valueInfor = require('../middleware/valueInfor');
const valuePut = require('../middleware/valuePut');
const router = express.Router();

router.use(valuePost);
router.use("/:idTarea",valuePut);


//Crear tareas
router.post('/', valueInfor, (req, res) => {
    const tareaNueva = req.body;
    listaTareas.push(tareaNueva);
    res.status(200).send("tarea añadida exitosamente");
});

//eliminar tarea, correccion de codigo segun recomendaciones.
router.delete('/:idTarea', (req, res) => {
    const id = req.params.idTarea;
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    if(indexTarea >= 0 && indexTarea < listaTareas.length){
        const eliminarTarea = listaTareas.splice(indexTarea, 1)[0];
        res.status(200).send({eliminarTarea});
    }else{
        res.status(400).send("la tarea no existe");
    }
});

//actualizar tarea
router.put('/:idTarea', valueInfor, (req, res) => {
    const id = req.params.idTarea;
    const tarea = req.body
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    if(indexTarea >= 0 && indexTarea < listaTareas.length){
        listaTareas[indexTarea] = tarea
        res.status(200).send("tarea modificada exitosamente");
    }else{
        res.status(400).send("la tarea no existe");
    }
});

module.exports = router;