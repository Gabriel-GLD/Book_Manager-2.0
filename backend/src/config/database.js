// Configs Db
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const db_PASS = process.env.DB_PASS
const db_NAME = process.env.DB_NAME


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: db_PASS,
  database: db_NAME,
  port: 3306
});

// Testa a conexão
connection.connect((err) => {
    if (err) {
        console.error(`Erro ao conectar ao banco ${db_NAME}:`, err)
        return;
    }
    console.log(`Conectado com sucesso ao banco de dados`)
});


export default connection;
