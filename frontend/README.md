# Frontend

Aplicação React/Vite para cadastro e busca de livros. A navegação entre a tela
principal e a página de empréstimos usa React Router.

## Executar

1. Copie `.env.example` para `.env` e ajuste `VITE_API_URL` caso a API não esteja
   em `http://localhost:3000`.
2. Execute `npm install` e `npm run dev`.
3. Abra o endereço local informado pelo Vite.

`npm run build` gera a versão de produção e `npm run lint` executa o Oxlint.

## Arquivos e funcionalidades

- `src/main.jsx`: ponto de entrada; monta a aplicação dentro de `BrowserRouter`
  para habilitar a navegação por rotas.
- `src/App.jsx`: define o layout compartilhado, o cabeçalho e as rotas `/`
  (cadastro de livros) e `/emprestimos` (página de empréstimos).
- `src/components/Header.jsx`: mostra o título e o botão que navega para
  `/emprestimos`.
- `src/pages/Emprestimos.jsx`: página inicial da área de empréstimos, preparada
  para receber o formulário dessa funcionalidade.
- `src/components/Quite.jsx`: controla o formulário de livros, envia
  `POST /cadastro` à API e mostra mensagens de sucesso ou erro.
- `src/components/Inputs.jsx`: campo de texto reutilizável, controlado pelo
  componente que o utiliza.
- `src/components/Buttons.jsx`: botão reutilizável que aceita ação, tipo e
  estado desabilitado.
- `.env.example`: exemplo da URL da API usada no navegador.
