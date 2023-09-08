const express = require('express');
const routerTarea = require('./router/list-view-router');
const router = require('./router/list-edit-router');
const app = express();
app.use(express.json());
const port = 3001;

app.use('/tareas', routerTarea);
app.use('/tareas', router);

app.listen(port, () => {
    console.log(`El servidor esta en http://localhost:${port}/tareas`);
});