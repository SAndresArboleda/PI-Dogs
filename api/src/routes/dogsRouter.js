const {Router} = require("express");

const dogsRouter = Router();


dogsRouter.get("/", (req, res) => {
    res.status(200).send("Buscar todos los Dogs")
});

dogsRouter.get("/:id", (req, res) => {
    res.status(200).send("Estos son detalles de los Dogs")
});

dogsRouter.post("/", (req, res) => {
    res.status(200).send("crear un Dog")
});

module.exports = dogsRouter;