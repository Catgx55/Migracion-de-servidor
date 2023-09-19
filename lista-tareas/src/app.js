const express = require('express');
const routerTarea = require('./router/list-view-router.js');
const router = require('./router/list-edit-router');
const valueMethod = require('./middleware/valueMethod.js');
const app = express();
app.use(express.json());
const port = 8080;

app.use('/tareas', routerTarea, router, valueMethod);

app.get("/tareas", (req, res) => {
    res.
    res.status(200).json("Bienvenido a la lista de tareas");
});

app.use((req, res) => {
    res.status(400).json("Ruta no encontrada");
})

app.listen(port, () => {
    console.log(`El servidor esta en http://localhost:${port}/tareas`);
});