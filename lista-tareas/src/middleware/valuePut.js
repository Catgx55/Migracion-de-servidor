const valuePut = ((req, res, next) => {
    const tarea = req.body;
    if(req.method === "PUT" && Object.values(tarea).length === 0){
        res.status(400).json("se necesita un payload");
    }else{
        next();
    }
});

module.exports = valuePut;