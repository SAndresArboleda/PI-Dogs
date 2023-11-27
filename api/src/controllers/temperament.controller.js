const { Sequelize } = require('sequelize');
const {Temperament} = require('../db')
const axios = require('axios')


const getTemperamt = async() => {
    let infClean = (arr)=>{
        return arr.map((elem)=>{
            return {
                Temperamento: elem.temperament,
                Creado: false,
            }
        })
    }
    const infoApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data; 
    const razasApi = infClean(infoApi);

    return razasApi
};

module.exports = {getTemperamt}