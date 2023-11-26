const {Dog} = require('../db')
const axios = require('axios')


const getDogByRaza = async() => {
    let infClean = (arr)=>{
        const razasUnicas = [...new Set(arr.map(elem=>elem.breed_group))]
        return razasUnicas.map((raza)=>({raza}))
    }
    const razasDB = await Dog.findAll()
    const infoApi = (await axios.get("https://api.thedogapi.com/v1/breeds")).data; 
    const razasApi = infClean(infoApi);

    return [...razasDB, ...razasApi]
}

const getDogById = async (id, source) => {
    let infClean = (arr)=>{
        return arr.map((elem)=>{
            return {
                id: elem.id,
                nombre: elem.name,
                raza: elem.breed_group,
            }
        })
    }
    const idDb = await Dog.findByPk(id);
    const infIdApi = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data;
    const IdApi =infClean(infIdApi);

    return IdApi;
// const dog = source === "api" 
// ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data  //data debe ir porque sino nos envia un objeto dentro de otro objeto;
// : await Dog.findByPk(id);    //metodo findByPk es para encontrar mas rapido el id si es de la base de datos  
// return dog;
}


const createDogDB = async (imagen,nombre,altura,peso,años)=>{
    return await Dog.create({imagen,nombre,altura,peso,años});
};

module.exports = {getDogById, createDogDB, getDogByRaza}









// const { dog } = require('../models/Dog')
// const { temperament } = require('../models/Temperament')


// const findDogs = async (req, res) => {

//     try {
//         const { raza } = req.query;
//         const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds`)
//         console.log(data);
    
//         // if (!data.name) throw new Error('Not found!')

//         const character = {
//             id,
//             imagen: data.reference_image_id,
//             nombre: data.name,
//             altura: data.height.metric,
//             peso: data.weight.metric,
//             años: data.life_span,
//             raza: data.breed_group,
//         }
//         return character.breed_group
//             ? res.json(character)
//             : res.status(404).send('Not found!')
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// };



// const findDogs = async ({ name }) => {
//     try {
//         const resp = await fetch('https://api.thedogapi.com/v1/breeds')
//         const data = await resp.json()

//         const arrApi = data.map(dog => {
//             let vida = dog.life_span?.split(' ')
//             let alturamin = Number(dog.height.metric.split(" - ")[0])
//             let alturamax = Number(dog.height.metric.split(" - ")[1])
//             let pesomin = Number(dog.weight.metric.split(" - ")[0])
//             let pesomax = Number(dog.weight.metric.split(" - ")[1])
//             let vidamin = Number(vida[0])
//             let vidamax = Number(vida[2])
//             let temperaments = dog.temperament?.split(',').map(t => t.trim())

//             return {
//                 id: dog.id,
//                 nombre: dog.name,
//                 imagen: dog.image.url,
//                 origen: "externo",
//                 alturamin, alturamax, pesomin, pesomax, vidamin, vidamax, temperaments
//             }
//         })
//         //SI NO VIENE UN NAME EN REQ QUERY ENTREGO TODOS LOS DOGS
//         if (!name) {
//             const doge = await Dog.findAll({
//                 include: { model: Temperament }
//             })
//             return [...doge, ...arrApi]
//         }
//         // SI VIENE NAME, AGREGO WHERE AL FINDALL, AMBOS CASOS INCLUYO EL MODELO DE TEMPERAMENTOS
//         const minusc = name.toLowerCase()
//         const doge = await Dog.findAll({
//             where: {
//                 // nombre: where(fn("LOWER", col('nombre')), "LIKE", `%${minusc}%`)
//                 nombre: {
//                     [Op.iLike]: `%${minusc}%`
//                 }
//             },
//             include: {
//                 model: Temperament
//             },
//         })
//         if (!doge) throw `No se encontró ${name}`
//         return doge

//     } catch (error) {
//         throw error
//     }
// }



//module.exports = { findDogs }