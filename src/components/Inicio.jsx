import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import Carrito from '../containers/Carrito'

const DivInicio = styled.div`
    width: 100%;
	height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const ImgInicio = styled.img`
    width: 200px;
    height: 200px;
`

const Inicio = () => {
    return (
        <DivInicio>
            <ImgInicio src="https://i.ibb.co/6YjTPdx/logo.png" alt="Logo" className="animate__animated animate__zoomInDown animate__delay-1s" />
        </DivInicio>
    )
}

export default Inicio
