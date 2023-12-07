const { Sequelize } = require('sequelize');
const {Dog} = require('../db')
const axios = require('axios')
const {Op} = require("sequelize")
const { API_KEY } = process.env


const getDogs = async() => {
    let infClean = (arr)=>{
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
    }
    const razasDB = await Dog.findAll()
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data; 
    const razasApi = infClean(infoApi);

    return [...razasDB, ...razasApi]
};

const getDogById = async (id, source) => {

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
    }
      
    let result = []

    if(source==="api"){
        const apiResponse = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data;
        result = infoClean([apiResponse])
    } else if(source==="bdd"){
        result = [(await Dog.findByPk(id))];
    }
    return result;
};

const getDogByName = async (name) => {
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
    const apiClean = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const dogApi = infoClean(apiClean);
    const filterDogApi = dogApi.filter((arr) => arr.nombre.toLowerCase().includes(name.toLowerCase()));
    
    const dogNameAll = await Dog.findAll({where:{nombre:name}});
    return [...filterDogApi, ...dogNameAll]
}

const createDogDB = async (nombre,altura_min, altura_max ,peso_min, peso_max, vida, temperamento)=>{ 
    return await Dog.create({nombre,altura_min, altura_max, peso_min, peso_max, vida, temperamento});
};


module.exports = {getDogs, getDogById, getDogByName, createDogDB, };