import { useState } from "react"


const Inputs = ({placeholder, id}) => {
    const [inputs, setInputs] = useState("")
    console.log(inputs)

    return(
        <>
        <input 
        onChange={(e) => setInputs(e.target.value)}
        value={inputs}
        className="bg-blue-200 p-2 rounded-md outline-blue-400" type="text" placeholder={placeholder} id={id}/>

        </>
    )

}

export default Inputs