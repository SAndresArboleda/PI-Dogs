const {Router} = require("express");

const temperamentRouter = Router();

temperamentRouter.get("/", (req, res) => {
    res.status(200).send("Buscar todos los temperamentos")
});

temperamentRouter.put("/", (req, res) => {
    res.status(200).send("Actualizar el temperamento")
});

  
module.exports = temperamentRouter