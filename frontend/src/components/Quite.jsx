import { useState } from "react";
import Buttons from "./Buttons";
import Inputs from "./Inputs";

function Quite() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);

  const cadLivro = async (event) => {
    event.preventDefault();
    setMensagem("");
    setEnviando(true);

    try {
      const apiUrl = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");
      const resposta = await fetch(`${apiUrl}/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: titulo.trim(),
          autor: autor.trim(),
        }),
      });


      const data = await resposta.json();
      if (!resposta.ok) {
        throw new Error(data.message || "Não foi possível cadastrar o livro.");
      }

      setMensagem(data.message);
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.error(error);
      setMensagem(error.message || "Não foi possível conectar ao servidor.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <>
      <div className=" w-screen h-screen flex  justify-center p-6">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <form onSubmit={cadLivro} className="space-y-4 p-6  bg-slate-100 rounded-md shadow flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 text-center">
              CADASTRAR LIVROS
            </h1>

            <label className="text-lg font-bold text-blue-500" htmlFor="NomeLivro">
              📚Digite o nome do Livro
            </label>
            <Inputs
              placeholder="🔍nome do Livro"
              id="NomeLivro"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              required
            />

            <label className="text-lg font-bold text-blue-500" htmlFor="NomeAutor">
              Digite o Nome do Autor
            </label>
            <Inputs
              placeholder="Nome do Autor"
              id="NomeAutor"
              value={autor}
              onChange={(event) => setAutor(event.target.value)}
              required
            />

            <Buttons type="submit" disabled={enviando} text={enviando ? "ENVIANDO..." : "CADASTRAR LIVROS"} />
            {mensagem && <p role="status" aria-live="polite">{mensagem}</p>}
          </form>

          <div className="space-y-4 p-6 bg-slate-100 rounded-md shadow flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 text-center p-5">
              🔍PROCURAR LIVRO NO SISTEMA
            </h1>
            <label className="text-lg font-bold text-blue-500" htmlFor="BuscaLivro">
              Digite o nome do livro para ver se ele esta cadastrado
            </label>
            <Inputs id="BuscaLivro" placeholder="🔍Nome do Livro que deseja procurar" />
            <Buttons text="BUSCAR LIVRO" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Quite;
