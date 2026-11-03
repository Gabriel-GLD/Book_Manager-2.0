# Backend

1. Copie `.env.example` para `.env` e configure os dados do MySQL.
2. Crie o banco indicado em `DB_NAME` no MySQL, se ele ainda não existir.
3. Execute `npm install` e `npm run db:init` para criar a tabela `livros`.
4. Inicie a API com `npm run dev` (ou `npm start`).

A tela do frontend envia os cadastros para `POST /cadastro`. O endpoint
`GET /health` verifica se a API consegue consultar o banco de dados.

## Arquivos e funcionalidades

- `src/server.js`: carrega as configurações, habilita CORS e JSON e inicia o
  servidor HTTP na porta `PORT` (ou `3000`).
- `src/config/database.js`: carrega as credenciais e cria o pool de conexões
  MySQL usando o driver `mysql2/promise`.
- `src/routes/RotasCad.js`: expõe `GET /` (mensagem simples da API),
  `GET /health` (teste da conexão com o banco) e `POST /cadastro` (validação e
  inserção parametrizada de título e autor na tabela `livros`).
- `src/database/scriptsDB.js`: cria a tabela `livros` caso ainda não exista e
  encerra a conexão do script.
- `package.json`: define os comandos `start`, `dev` e `db:init`.
- `.env.example`: lista as variáveis necessárias para a conexão MySQL e para a
  porta da API.
