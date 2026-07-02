import Buttons from "./Buttons"
import Header from "./Header"
import Inputs from "./Inputs"


function Quite() {

    return (
        <>
            <div className="w-screen h-screen  flex justify-center  p-6">
                <div className="space-y-4 p-6 w-300 h-200 bg-slate-100 rounded-md shadow flex flex-col">
                    <h1 className="text-2xl font-bold text-blue-600 text-center" >Cadastro de Livros</h1>

                    <label className="text-lg font-bold text-blue-500" htmlFor="">📚Digite o nome do Livro</label>
                    <Inputs />

                    <label className="text-lg font-bold text-blue-500" htmlFor="">Digite o Codigo do Livro</label>
                    <Inputs />
                
                    <Buttons text="CADASTRAR LIVROS"/>

                    <h1>Procurar Livro no Sistema</h1>
                    <Inputs />
                </div>

                <div></div>

           
            </div>
        
        </>
    )
   
}

export default Quite