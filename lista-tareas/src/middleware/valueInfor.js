//Middleware para validar que los atributos esten completos.
const valueInfor = ((req, res, next) => {
    const {descripcion} = req.body;
    if(!descripcion){
        return res.status(400).json({error: "faltan atributos obligatorios o tipo de datos invalido"});
    }else{
        next();
    }
});


module.exports = valueInfor;