const { Router } = require("express");
const {
    getRazasHandler,
    getDetalHandler,
    getRazaNameHandler,
    postDogHandler,
    putActualizarHandler,
    putDeleiHandler,} = require('../handler/dogsHandlers')

const dogsRouter = Router();


dogsRouter.get('/', getRazasHandler);  //Buscar todas las razas
dogsRouter.get("/:id", getDetalHandler);  //Buscar detalles por razas
dogsRouter.get("/name", getRazaNameHandler);  //Buscar razas por nombre
dogsRouter.post("/", postDogHandler);  //Crear un nuevo perro
// dogsRouter.put("/", putActualizarHandler);  //Actualizar detalles perro
// dogsRouter.delete("/", putDeleiHandler);  //Borrar un perro

module.exports = {dogsRouter};

//Nota:=>
// dogsRouter.get("/name", /*ESTO ES EL HANDLER ==>*/  (req, res) => {
//     res.status(200).send('Buscar razas por nombre')
// });