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



    /* const token = req.headers.authorization;
    jwt.verify(token, KEY, (err, decoded) => {
        if(err) res.send('Token incorrecto');

        if(req.url === '/listaTareas'){
            if(decoded.rol === 'user1'){
                next();
            }else{
                res.send('Acceso no autorizado');
            }
        }else{
            (decoded.rol === "user2")
        }
    }); */