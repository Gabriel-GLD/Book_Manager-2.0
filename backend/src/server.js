import express from 'express';
import cors from 'cors'

import routes from './routes/RotasCad.js'
import connection from './config/database.js'

const app = express()
const port = 3000

app.use(cors())
app.use(routes)
app.use(express.json())


app.get('/', (req, res) => {
    res.send('get rodando')
})


app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})