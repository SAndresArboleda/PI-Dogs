const {Router} = require("express");
const {
    getTemperHandler,
    postNewHandler,
    putActualizarHandler} = require('../handler/TemperHandlers')

const temperamentRouter = Router();

temperamentRouter.get("/", getTemperHandler)
temperamentRouter.post( "/", postNewHandler)
temperamentRouter.put( "/", putActualizarHandler)

  
module.exports = temperamentRouter