const express = require('express');
const listaTareas = require('../lista');
const routerTarea = express.Router();

routerTarea.get('/', (req, res) => {
    res.status(201).send(listaTareas);
});
//listar las tareas que están completas
routerTarea.get('/completa', (req, res) => {
    const tareaCompleta = listaTareas.filter(t => t.completed == true);
    res.send(tareaCompleta);    
});

//listar las tareas que están incompletas
routerTarea.get('/incompleta', (req, res) => {
    const tareaIncompleta = listaTareas.filter(t => t.completed == false);
    res.send(tareaIncompleta);
})

module.exports = routerTarea;
