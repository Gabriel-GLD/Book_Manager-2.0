import connection from '../config/database.js';

try {
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS livros (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      autor VARCHAR(255) NOT NULL
    )
  `);
  console.log('Tabela livros pronta para receber cadastros.');
} catch (error) {
  console.error('Não foi possível preparar a tabela livros:', error);
  process.exitCode = 1;
} finally {
  await connection.end();
}
