const express = require("express");
const morgan = require("morgan");  //manda codigo de error en la api
const mainRouter = require("./routes/mainRouter");

const app = express();

//Estos son los middlware
app.use(morgan("dev"))

app.use(mainRouter)


module.exports = app;