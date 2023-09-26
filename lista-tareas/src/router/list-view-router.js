const express = require('express');
const listaTareas = require('../lista');
const usersValidation = require('../middleware/usersValidation');
const routerTarea = express.Router();

routerTarea.get('/listaTareas', usersValidation, (req, res) => {
    res.status(201).json(listaTareas);
});
//listar las tareas que están completas
routerTarea.get('/completa', usersValidation, (req, res) => {
    const tareaCompleta = listaTareas.filter(t => t.completed == true);
    res.json(tareaCompleta);    
});

//listar las tareas que están incompletas
routerTarea.get('/incompleta', usersValidation, (req, res) => {
    const tareaIncompleta = listaTareas.filter(t => t.completed == false);
    res.json(tareaIncompleta);
})

module.exports = routerTarea;
