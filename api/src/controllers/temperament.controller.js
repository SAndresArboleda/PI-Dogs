const { Sequelize } = require('sequelize');
const { Temperament } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env
const {Dog} = require('../db')


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
            if (elem !== "" && !uniqueTemperaments.includes(elem.trim())) {  //trim( ) para quitar los espacios
                uniqueTemperaments.push(elem.trim())
            }
        })
        return uniqueTemperaments;
    }

    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const resultado = getUniqueTemperaments(infoApi);
    

    return resultado
};

module.exports = {getTemperamt }