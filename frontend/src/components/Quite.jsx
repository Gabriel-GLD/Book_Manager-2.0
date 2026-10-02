import Buttons from "./Buttons";
import Header from "./Header";
import Inputs from "./Inputs";




function Quite() {



  const CadLivro   =  async () => {
    try{
      
      // conexao com o back e envio dos dados para o banco de dados
      const resposta = await fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          titulo: document.getElementById('NomeLivro').value,
          autor: document.getElementById('NomeAutor').value
        })
      })
  
      const data = await resposta.json();
      if(!resposta.ok) {
        throw new Error(data.message)
      }
  
      console.log(data)
  
    }catch(error){
      console.error(error)
  
    }
  }



  return (
    <>
      <div className=" w-screen h-screen flex  justify-center p-6">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <div className="space-y-4 p-6  bg-slate-100 rounded-md shadow flex flex-col">

            <h1 className="text-2xl font-bold text-blue-600 text-center">
              CADASTRAR LIVROS
            </h1>

            <label className="text-lg font-bold text-blue-500" htmlFor="">
              📚Digite o nome do Livro
            </label>
            <Inputs placeholder="🔍nome do Livro" id="NomeLivro" />

            <label className="text-lg font-bold text-blue-500" htmlFor="">
              Digite o Nome do Autor
            </label>
            <Inputs placeholder="Nome do Autor" id="NomeAutor"/>

            <Buttons onClick={CadLivro} text="CADASTRAR LIVROS" />
          </div>

          <div className="space-y-4 p-6 bg-slate-100 rounded-md shadow flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 text-center p-5">
              🔍PROCURAR LIVRO NO SISTEMA
            </h1>
            <label className="text-lg font-bold text-blue-500" htmlFor="">Digite o nome do livro para ver se ele esta cadastrado</label>
            <Inputs placeholder="🔍Nome do Livro que deseja procurar" />
            <Buttons text="BUSCAR LIVRO" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Quite;
