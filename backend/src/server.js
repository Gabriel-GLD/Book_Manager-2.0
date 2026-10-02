import express from 'express';
import cors from 'cors'

import axios from 'axios'
import router from './routes/RotasCad.js'
import connection from './config/database.js'

import dotenv from 'dotenv';
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)



app.listen(process.env.PORT || 3000, () => {
    console.log(`server rodando na porta ${process.env.PORT || 3000}`)
})