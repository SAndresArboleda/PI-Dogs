const { Sequelize } = require('sequelize');
const {Dog} = require('../db')
const axios = require('axios')
const {Op} = require("sequelize")


const getDogByRaza = async() => {
    let infClean = (arr)=>{
        return arr.map((elem)=>{
            return {
                Id: elem.id,
                Imagen: elem.reference_image_id,
                Nombre: elem.name,
                Grupo: elem.breed_group,
                Temperamento: elem.temperament,
                "Peso (Kg)": elem.weight.metric,
                Creado: false,
            }
        })
    }
    const razasDB = await Dog.findAll()
    const infoApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data; 
    const razasApi = infClean(infoApi);

    return [...razasDB, ...razasApi]
};

const getDogById = async (id, source) => {

    let infoClean = (arr)=>{
        return arr.map((elem)=>{
            return {
                Id: elem.id,
                Imagen :elem.reference_image_id,
                Nombre: elem.name,
                Altura: elem.height.metric,
                "Peso (Kg)": elem.weight.metric,
                "Años de Vida": elem.life_span,
                Creado: false
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
            return {
                id: elem.id,
                imagen :elem.reference_image_id,
                nombre: elem.name,
                creado: false
            }
        })
    };
    const apiClean = (await axios.get(`https://api.thedogapi.com/v1/breeds`)).data;
    const dogApi = infoClean(apiClean);
    const filterDogApi = dogApi.filter((arr) => arr.nombre === name);
    
    console.log(filterDogApi);
    const dogNameAll = await Dog.findAll({where:{nombre:name}});
    return [...filterDogApi, ...dogNameAll]
}
//({where:{name:{[Op.ilike]:`%${name}%`}}});

const createDogDB = async (nombre,altura,peso,años)=>{ 
    return await Dog.create({nombre,altura,peso,años});
};

module.exports = {getDogByRaza, getDogById, getDogByName, createDogDB, };