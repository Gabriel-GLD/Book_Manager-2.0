import Buttons from "./Buttons";

function Header() {
  return (
    <>
      <header className="bg-blue-500 p-3 flex justify-between">
        <h1 className="text-white font-bold text-xl">Cadastro e Busca de Livros</h1>
        <a href="" className="bg-blue-600 rounded-md w-fit p-2 active:scale-95 inline-block text-white font-semibold shadow">Emprestimo</a>
      </header>
    </>
  );
}
export default Header;
