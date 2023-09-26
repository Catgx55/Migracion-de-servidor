const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../users');
const login = express.Router();
require('dotenv').config({path:'./.env'});

const KEY = process.env.SECRET_KEY;

login.post('/login', (req, res) => {
    const {email, password} = req.body;
    for(let i = 0; i < users.length; i++){
        if(email === users[i].email && password === users[i].password){
            const token = jwt.sign(users[i], KEY);
            res.send({token});
        }
    }
    res.status(400).send('usuario o contraseña incorrectos');
});

module.exports = login;