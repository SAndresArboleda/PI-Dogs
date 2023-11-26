const { Sequelize,} = require("sequelize");
require("dotenv").config();

const DogModel = require('./models/DogModel')
const TemperamentModel = require('./models/TemperamentModel');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,   // dogs es el nombre de la base de datos creada en shell
  {logging: false, // esto es para que no me este imprimiendo en consola lo que esta ocurriendo en mi base de datos
  native: false,} //
);

DogModel(sequelize)
TemperamentModel(sequelize)

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperament } = sequelize.models;  //vuelvo a traer los modelos. //Este dog y temperament es el del modelo que esta entre comillas

// Aca vendrian las relaciones
Dog.belongsToMany(Temperament, {through:"dogtemperament", timestamps: false})  //genero la relacion de los modelos. dogtemperament es una tabla intermediaria aparece en shell
Temperament.belongsToMany(Dog, {through:"dogtemperament", timestamps: false})  //genero la relacion de los modelos. dogtemperament es una tabla intermediaria aparece en shell

module.exports = {
  ...sequelize.models,
  conn: sequelize,
}