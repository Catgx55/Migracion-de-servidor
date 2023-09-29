//Middleware para validar que el body no este vacio.
const valueBody = ((req, res, next) => {
    const tareaNueva = req.body;
    if(Object.values(tareaNueva).length === 0){
        res.status(400).json("se necesita un payload");
    }else{
        next();
    }
});

module.exports = valueBody;