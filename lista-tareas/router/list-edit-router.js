const express = require('express');
const listaTareas = require('../lista');
const router = express.Router();


//Crear tareas
router.post('/', (req, res) => {
    const tareaNueva = req.body;
    listaTareas.push(tareaNueva);
    res.status(200).send("tarea añadida exitosamente");
});

//eliminar tarea
router.delete('/:idTarea', (req, res) => {
    const id = req.params.idTarea;
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    const eliminarTarea = listaTareas.splice(indexTarea, 1);
    res.status(200).send({eliminarTarea});
});

router.put('/:idTarea', (req, res) => {
    const id = req.params.idTarea;
    const tarea = req.body
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    listaTareas[indexTarea] = tarea
    res.status(200).send("tarea modificada exitosamente");
});

module.exports = router;