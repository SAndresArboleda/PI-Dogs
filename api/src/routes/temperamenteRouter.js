const {Router} = require("express");
const {getTemperHandler, getTemperNameHandler} = require('../handler/TemperHandlers')

const temperamentRouter = Router();

temperamentRouter.get("/", getTemperHandler)
temperamentRouter.get("/name", getTemperNameHandler)
// temperamentRouter.post( "/", postNewHandler)
// temperamentRouter.put( "/", putActualizarHandler)

  
module.exports = {temperamentRouter}