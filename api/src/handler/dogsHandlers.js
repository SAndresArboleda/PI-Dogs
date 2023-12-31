const { getDogs, getDogById, getDogByName, createDogDB, } = require("../controllers/dog.controller");

const getRazasHandler = async (req, res) => {    //Buscar todas las razas
    const { name } = req.query
    if (!name) {
        try {
            const dogRaza = await getDogs()
            res.status(200).json(dogRaza);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        try {
            const response = await getDogByName(name);
            res.status(200).json(response); //Buscar razas por nombre
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
};

const getDetalHandler = async (req, res) => {  //handler, se va a encargar de recibir los request, unificar y dar la respuesta. Invoca al controller
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";  //Esto es para verificar si el id es de base de datos (numero) o de Api(hjkhl-hkjhkh-gadd)

    try {
        const response = await getDogById(id, source);
        res.status(200).json(response); //Buscar detalles por razas
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getRazaNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await getDogByName(name);
        res.status(200).json(response); //Buscar razas por nombre
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
//(name.toLowerCase());


const postDogHandler = async (req, res) => {
    const {nombre, altura_min, altura_max, peso_min, peso_max, vida, temperamentos } = req.body;
    if(!nombre || !altura_min || !altura_max || !peso_min || !peso_max || !vida || !temperamentos) {
        return res
          .status(400)
          .send({msg: "Falta enviar datos obligatorios"})
      }
    try {
        const response = await createDogDB(nombre, altura_min, altura_max, peso_min, peso_max, vida, temperamentos)
        res.status(200).json(response)   //Crear Peroo. Se usa Json porque voy a devolver un objeto
    } catch (error) {
        res.status(400).send({ error: error.message + " no se creó" })
    }
};

//NO LOS HICE PORQUE ESTOY MUY ATRASADO EN EL CALENDARIO

// const putActualizarHandler = (req, res) => {
//     try {

//     } catch (error) {

//     }
//     res.status(200).send('Actualizar detalles perro')
// };
// const putDeleiHandler = (req, res) => {
//     res.status(200).send('Borrar un perro')
// };

module.exports = {
    getRazasHandler,
    getDetalHandler,
    getRazaNameHandler,
    postDogHandler
}