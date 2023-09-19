const valueMethod = ((req, res, next) => {
    const metodosValidos = ["GET", "POST", "PUT", "DELETE"];
    const metodos = req.method;
    if(metodosValidos.includes(metodos)){
        next();
    }else{
        res.status(405).json("Metodo incorrecto");
    }
});

module.exports = valueMethod;