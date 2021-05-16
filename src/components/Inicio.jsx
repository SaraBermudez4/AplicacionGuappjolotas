import React from 'react'
import styled from 'styled-components'

const DivInicio = styled.div`
    width: 100%;
	height: 100%;
	line-height: 700px;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
`

const ImgInicio = styled.img`
    width: 200px;
    height: 200px;
    vertical-align: middle;
`

const Inicio = () => {
    return (
        <DivInicio>
            <ImgInicio src="https://i.ibb.co/6YjTPdx/logo.png" alt="Logo" className="animate__animated animate__backInUp animate__faster" />
        </DivInicio>
    )
}

export default Inicio
