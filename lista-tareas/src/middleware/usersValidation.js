//Middleware para validar el toke sea correcto.
const jwt = require('jsonwebtoken');
require('dotenv').config({path:'./.env'});

const usersValidation = ((req, res, next) => {
    const token = req.headers.authorization;
    if(!token) res.send("Acceso no autorizado");

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if(err){
            res.send("Acceso no autorizado o token incorrecto");
        }else{
            next();
        }
    })

});

module.exports = usersValidation;