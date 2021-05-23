import { useState } from 'react'

export const useCounter = (inicial = 0, modificarCantidad) => {


    const [state, setstate] = useState(inicial)

    const incremento = () => {
        setstate(state + 1)
        modificarCantidad("cantidad", state + 1)
    }

    const decremento = () => {
        // setstate(state - 1 )
        if (state === 0) {
            state = 0;
        } else {
            setstate(state - 1)
        }
        modificarCantidad("cantidad", state - 1)
    }

    return {
        state,
        incremento,
        decremento,
    }

}
