const express = require('express');
const lista = require('./lista');
const app = express();
const port = 3001

app.get('/', (req, res) => {
    res.json(lista);
})

app.listen(port, () => {
    console.log("El servidor esta en http://localhost:" + port);
});