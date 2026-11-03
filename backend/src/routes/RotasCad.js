import { Router } from 'express';
import connection from '../config/database.js';

export const router = Router();

router.get('/', (req, res) => {
    res.send('get rodando');
});

router.get('/health', async (req, res) => {
    try {
        await connection.query('SELECT 1');
        res.json({ status: 'ok', database: 'connected' });
    } catch (error) {
        console.error('Falha ao verificar conexão com o banco de dados:', error);
        res.status(503).json({ message: 'Não foi possível conectar ao banco de dados' });
    }
});

router.post('/cadastro', async (req, res) => {
    try {
        const { titulo, autor } = req.body ?? {};
        const tituloNormalizado = typeof titulo === 'string' ? titulo.trim() : '';
        const autorNormalizado = typeof autor === 'string' ? autor.trim() : '';

        if (!tituloNormalizado || !autorNormalizado) {
            return res.status(400).json({ message: 'Título e autor são obrigatórios' });
        }

        const [resultado] = await connection.execute(
            'INSERT INTO livros (titulo, autor) VALUES (?, ?)',
            [tituloNormalizado, autorNormalizado],
        );

        res.status(201).json({
            message: 'Livro cadastrado com sucesso',
            livro: {
                id: resultado.insertId,
                titulo: tituloNormalizado,
                autor: autorNormalizado,
            },
        });
    } catch (error) {
        console.error('Falha ao cadastrar livro:', error);
        res.status(500).json({ message: 'Não foi possível cadastrar o livro no banco de dados' });
    }
});

export default router;
