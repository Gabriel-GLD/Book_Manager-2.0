// Configs Db
import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gabri377#',
  database: 'bookmanager2',
  port: 3306
});

// Testa a conexão
connection.connect((err) => {
    if (err) {
        console.error(`Erro ao conectar ao banco ${err.stack}`)
        return;
    }
    console.log(`Conectado com sucesso ao banco de dados`)
});

export default connection;
