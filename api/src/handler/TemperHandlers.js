

const getTemperHandler = (req, res) => {
    res.status(200).send("Buscar todos los temperamentos")
};
const postNewHandler = (req, res) => {
    res.status(200).send('Crear temperamento')
 };

 const putActualizarHandler = (req, res) => {
    res.status(200).send('Actualizar temperamento')
 };

 module.exports = {
    getTemperHandler,
    postNewHandler,
    putActualizarHandler,
 }