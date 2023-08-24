import express from 'express'
import trucks from './routes/trucks.routes.js'
import trailers from './routes/trailers.routes.js'


const app = express()

app.use(express.json())

app.use(trucks)
app.use(trailers)
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route that doesn't exist"
    })
})

app.listen(3000)

console.log('Server running port 3000')

