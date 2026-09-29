import express from 'express';
import cors from 'cors'

const app = express()
const port = 3300

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('get rodando')
})




app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})