import Buttons from "./Buttons";

import { useNavigate, BrowserRouter, Routes } from 'react-router-dom'

function Header() {

  // const navigate = useNavigate();

  return (
    
    <>
    
      <header className="bg-blue-500 p-3 flex justify-between">
        <h1 className="text-white font-bold text-xl">Cadastro e Busca de Livros</h1>
        <button
        href=""   
        className="bg-blue-600 rounded-md w-fit p-2 active:scale-95 inline-block text-white font-semibold shadow cursor-pointer">Emprestimo</button>
      </header>
    </>
  );
}
export default Header;
