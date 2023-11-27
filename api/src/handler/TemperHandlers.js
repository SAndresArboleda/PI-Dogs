const {getTemperamt} = require('../controllers/temperament.controller')

const getTemperHandler = async (req, res) => {
   const {} = req.query
   try {
      const response = await getTemperamt()
      res.status(200).json(response); //Buscar todos los temperamentos
   } catch (error) {
      res.status(400).json({ error: error.message });
   }
};


// const postNewHandler = (req, res) => {
//     res.status(200).send('Crear temperamento')
//  };

//  const putActualizarHandler = (req, res) => {
//     res.status(200).send('Actualizar temperamento')
//  };

 module.exports = {
    getTemperHandler
 }