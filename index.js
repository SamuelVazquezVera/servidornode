import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import privadaRouter from './routes/privada.js'
import usuarioRouter from './routes/usuario.js'
import paseRouter from './routes/pase.js'
import visitanteRouter from './routes/visitante.js'
import connectToDatabase from './db/db.js'

connectToDatabase() 
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/privada', privadaRouter)
app.use('/api/usuario', usuarioRouter)
app.use('/api/pase', paseRouter)
app.use('/api/visitante', visitanteRouter)

app.listen(process.env.PORT, () => {
    console.log("Server is running", process.env.PORT)
})