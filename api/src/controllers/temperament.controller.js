const { Sequelize } = require('sequelize');
const { Temperament } = require('../db')
const axios = require('axios')


const getTemperamt = async () => {

    let getUniqueTemperaments = (array) => {
        let uniqueTemperaments = [];
        let temperaments = "";
        let temperamentsArray = [];

        array.forEach((element) => {
            temperaments += ','+ element.temperament;
        });
        temperaments = temperaments.replaceAll(" ",",")
        temperamentsArray = temperaments.split(',');
        temperamentsArray.forEach((elem) => {
            if (elem !== "" && !uniqueTemperaments.includes(elem.trim())) {
                uniqueTemperaments.push(elem.trim())
            }
        })
        return uniqueTemperaments;

    }

    let infClean = (arr) => {
        return arr.map((elem) => {
            return {
                Temperamento: elem.temperament,
                Creado: false,
            }
        })
    }
    const infoApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
    
    console.log(infoApi);
    const resultado = getUniqueTemperaments(infoApi);

    return resultado
};

module.exports = { getTemperamt }