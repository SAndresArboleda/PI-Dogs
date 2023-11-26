const { getDogById, createDogDB, getDogByRaza } = require("../controllers/dog.controller");

const getRazasHandler = async (req, res) => {    //Buscar todas las razas
    const { } = req.query
    try {
        const dogRaza = await getDogByRaza()
        res.status(200).json(dogRaza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getDetalHandler = async (req, res) => {  //handler, se va a encargar de recibir los request, unificar y dar la respuesta. Invoca al controller
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api"  //Esto es para verificar si el id es de base de datos (numero) o de Api(hjkhl-hkjhkh-gadd)

    try {
        const response = await getDogById(id, source);
        res.status(200).json({ response }); //Buscar detalles por razas
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRazaHandler = (req, res) => {
    const { name } = req.query;
    res.status(200).send('Buscar razas por nombre')
};

const postDogHandler = async (req, res) => {
    const { imagen, nombre, altura, peso, años } = req.body;
    try {
        const response = await createDogDB(imagen, nombre, altura, peso, años)
        res.status(200).json(response)   //se usa Json porque voy a devolver un objeto
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const putActualizarHandler = (req, res) => {
    res.status(200).send('Actualizar detalles perro')
};
const putDeleiHandler = (req, res) => {
    res.status(200).send('Borrar un perro')
};

module.exports = {
    getRazasHandler,
    getDetalHandler,
    getRazaHandler,
    postDogHandler,
    putActualizarHandler,
    putDeleiHandler,
}