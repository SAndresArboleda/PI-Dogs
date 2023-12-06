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


const getTemperamts = async (name) => {

    let infoClean = (arr)=>{
        return arr.map((elem)=>{
            const [peso_min, peso_max] = elem.weight.metric.split('-').map(value => parseFloat(value.trim()));
            const [altura_min, altura_max] = elem.height.metric.split('-').map(value => parseFloat(value.trim()));
            return {
                id: elem.id,
                image: elem.reference_image_id,
                nombre: elem.name,
                grupo: elem.breed_group,
                temperamento: elem.temperament,
                peso_min,
                peso_max,
                altura_min,
                altura_max,
                vida: elem.life_span,
                creado: false,
            }
        })
    };
    const inforApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const dogApi = infoClean(inforApi);
    const filterDogApi = dogApi.filter((arr) => arr.temperamento.toLowerCase()=== name.toLowerCase());
    
    const dogNameAll = await Dog.findAll({where:{temperamento:name}});
    return [...filterDogApi, ...dogNameAll]
}

module.exports = { 
    getTemperamt,
    getTemperamts, }