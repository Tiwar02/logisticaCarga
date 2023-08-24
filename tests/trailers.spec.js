import app from "../src/app.js"
import request from "supertest"
import { pool } from "../src/db.js"

describe('GET /trailers', () => {

    test('should respond with a 200 status code', async () => {

        const response = await request(app).get('/trailers').send()
        expect(response.statusCode).toBe(200);
    })

    test('should respond with an array', async () => {

        const response = await request(app).get('/trailers').send()
        expect(response.body).toBeInstanceOf(Array);
    })

})

describe('POST /trailers', () => {

    test('should respond with a 201 status code', async () => {

        const response = await request(app).post('/trailers').send()
        expect(response.statusCode).toBe(201);
    })

    afterAll(() => {
        pool.end((err) => {
            if (err) {
              console.error('Error al cerrar la conexión:', err);
            } else {
              console.log('Conexión cerrada correctamente');
            }
          });
      });
})