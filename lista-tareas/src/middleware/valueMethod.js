const valueMethod = ((req, res, next) => {
    const metodosValidos = ["GET", "POST", "PUT", "DELETE"];
    const metodos = req.method;
    if(metodosValidos.includes(metodos)){
        next();
    }else{
        res.status(400).json("Metodo incorrecto");
    }
});

module.exports = valueMethod;