import React from 'react'
import styled from 'styled-components'

const DivFC = styled.div`
    width: 100%;
	height: 100%;
    text-align: center;
    margin: 0 auto;
`

const ImgFC = styled.img`
    width: 200px;
    height: 200px;
    vertical-align: middle;
`

const H2FC = styled.h2`
    font-family: 'Times New Roman';
`

const FondoCarrito = () => {
    return (
        <DivFC>
            <ImgFC src="https://i.ibb.co/TTLS7GL/shop-cart.png" alt="Sin Productos" />
            <H2FC>No hay productos</H2FC>
        </DivFC>
    )
}

export default FondoCarrito
