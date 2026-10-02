import { Router } from 'express';
import connection from '../config/database.js'

export const router = Router()

router.get('/', (req, res) => {
    res.send('get rodando')
})

router.post('/cadastro', async (req, res) => {
    try {
        const {titulo, autor} =  req.body

        if (!titulo || !autor) {
            return res.status(400).json({message: 'Titulo e autor são obrigatorios'})
        }

        const [resultado] = await connection.promisse().execute('INSERT INTO livros (titulo, autor) VALUES (?, ?)', [titulo, autor])

        res.status(201).json({message: 'Livro cadastrado com sucesso', livro: {
            id: resultado.insertId,
            titulo,
            autor
        }
    });

    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Deu pau no servidor'})
    }
})

export default router;