import app from "../src/app.js"
import request from "supertest"

describe('GET /trucks', () => {

    test('should respond with a 200 status code', async () => {

        const response = await request(app).get('/trucks').send()
        expect(response.statusCode).toBe(200);
    })

    test('should respond with an array', async () => {

        const response = await request(app).get('/trucks').send()
        expect(response.body).toBeInstanceOf(Array);
    })

})

describe('POST /trucks', () => {

    test('should respond with a 201 status code', async () => {

        const response = await request(app).post('/trucks').send()
        expect(response.statusCode).toBe(201);
    })
})

