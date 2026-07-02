function Buttons({text}) {

    return (

        <>
           <div className="flex justify-center ">
            <button 
            className="bg-blue-600 rounded-md w-100 active:scale-95 text-white font-bold p-3 flex justify-center cursor-pointer text-center"
            > {text}
            </button>
           </div>
        </>

    )
}




export default Buttons;
