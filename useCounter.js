import { useState } from 'react'


export const useCounter = (initialState = 1) => {
    
    const [counter, setCounter] = useState(initialState)
    
    
    const incremento = () =>{
        setCounter( counter + 1 )
    }
    
    const decremento = () =>{
        setCounter( counter - 1 )
    }

    const resetear = () =>{
        setCounter( initialState )
    }


    //Retorno las funciones y el estado
    return ({
        counter,
        incremento,
        decremento,
        resetear
    })

}
