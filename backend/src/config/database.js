import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.DB_NAME;

if (!database) {
  throw new Error('DB_NAME precisa estar definido na configuração do backend.');
}

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database,
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
