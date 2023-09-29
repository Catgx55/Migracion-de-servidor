const express = require('express');
const listaTareas = require('../data/lista');
const usersValidation = require('../middleware/usersValidation');
const routerTarea = express.Router();

//muestra la lista de tareas y tambien la tareas por su id.
routerTarea.get('/listaTareas/:id', usersValidation, (req, res) => {
    const id = req.params.id
    const indexTarea = listaTareas.findIndex((e) => e.id == id);
    if(indexTarea > 0){
        res.json(listaTareas[indexTarea])
    }else if(id === 'lista'){
        res.status(201).json(listaTareas);
    }
});
//lista las tareas que están completas y las incompletas
routerTarea.get('/:completa', usersValidation, (req, res) => {
    const completa = req.params.completa;
    if(completa === "completa"){
        const tareaCompleta = listaTareas.filter(t => t.completed == true);
        res.json(tareaCompleta);
    }else if(completa === "incompleta"){
        const tareaIncompleta = listaTareas.filter(t => t.completed == false);
        res.json(tareaIncompleta);
    }else{
        res.status(400).json("Parametro incorrecto");
    }
});

module.exports = routerTarea;
