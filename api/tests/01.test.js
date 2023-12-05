const app = require('../src/app')
const session = require('supertest')
const agent = session(app);

describe("Test de RUTAS", () => {
  describe('GET /localhost:3001/dogs/:id', () => {
      it('Responde con status: 200', async () => {
          await agent.get('/localhost:3001/character/1').expect(200);
      });
      it('Responde un objeto con las propiedades: "id", "name"', async () => {
          const response = (await agent.get('/localhost:3001/1')).body;
          expect(response).toHaveProperty('id');
          expect(response).toHaveProperty('name');
          
      })
      it('Si hay un error responder con status: 404', async() => {
          await agent.get('/api.thedogapi.com/v1/breeds / 1000000').expect(404)
      })
  })
})



// const { db } = require("../db");

// describe("Conexión a la base de datos", () => {
//   test("Debe establecerse correctamente la conexión", async () => {
//     try {
//       await db.authenticate();
//       expect(true).toBe(true);
//     } catch (error) {
//       expect(error).toBeUndefined();
//     }
//   });

//   test("Debe ser posible realizar operaciones en la base de datos", async () => {
//     try {
//       await db.query("SELECT 1 + 1");
//       expect(true).toBe(true);
//     } catch (error) {
//       expect(error).toBeUndefined();
//     }
//   });
// });