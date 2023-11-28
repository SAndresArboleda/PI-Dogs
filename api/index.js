const server = require("./src/app");
const { conn } = require("./src/db")

server.listen(3001, () => {
    conn.sync({ force: false }); //sync para hacer la comunicacion, sincronizar todos los modelos definidos en la base de datos*/
    /* force: true => es para que se este actualizando la tabla cuando este actualizando
 la informacion en js. Puede ser alter:true que es para actualizar solo lo que se modifique de la tabla, este mas usado al crear pagina*/
    console.log("leyendo puerto 3001");
});
