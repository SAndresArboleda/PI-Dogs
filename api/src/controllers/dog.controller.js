const { Sequelize } = require('sequelize');
const {Dog} = require('../db')
const axios = require('axios')
const {Op} = require("sequelize")
const { API_KEY } = process.env


const getDogByRaza = async() => {
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
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data; 
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
    const apiClean = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data;
    const apiDogClean = infoClean([apiClean])
    const dog = source === "api"

    ? await apiDogClean  //data debe ir porque sino nos envia un objeto dentro de otro objeto;
    : await Dog.findByPk(id);    //metodo findByPk es para encontrar mas rapido el id si es de la base de datos
    return dog;
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
    const apiClean = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogApi = infoClean(apiClean);
    const filterDogApi = dogApi.filter((arr) => arr.nombre.toLowerCase().includes(name.toLowerCase()));
    
    console.log(filterDogApi);
    const dogNameAll = await Dog.findAll({where:{nombre:name}});
    return [...filterDogApi, ...dogNameAll]
}

const createDogDB = async (nombre,altura_min, altura_max ,peso_min, peso_max, vida, temperamentos)=>{ 
    return await Dog.create({nombre,altura_min, altura_max, peso_min, peso_max, vida, temperamentos});
};


module.exports = {getDogByRaza, getDogById, getDogByName, createDogDB, };