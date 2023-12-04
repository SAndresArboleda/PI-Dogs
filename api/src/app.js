const express = require("express");
const morgan = require("morgan");  //manda codigo de error en la api
const mainRouter = require("./routes/mainRouter");
const cors = require('cors')

const app = express();

app.use(cors());

//Estos son los middlware: es un mediador, es una funcion que se ejecuta antes de que continue el flujo de informacion.

app.use(morgan("dev"))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json())

app.use(mainRouter)


module.exports = app;