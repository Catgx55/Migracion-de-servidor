const express = require('express');
const routerTarea = require('./router/list-view-router.js');
const router = require('./router/list-edit-router');
const valueMethod = require('./middleware/valueMethod.js');
const login = require('./router/login.js');
const app = express();
app.use(express.json());
const port = 8080;

app.use('/tareas', login, routerTarea, router, valueMethod);

app.use((req, res) => {
    res.status(400).json("Ruta no encontrada");
})

app.listen(port, () => {
    console.log(`El servidor esta en http://localhost:${port}`);
});