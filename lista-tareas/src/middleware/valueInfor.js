const valueInfor = ((req, res, next) => {
    const {descripcion, completed} = req.body;
    if(!descripcion){
        return res.status(400).json({error: "faltan atributos obligatorios o tipo de datos invalido"});
    }else{
        next();
    }
});


module.exports = valueInfor;