import React, { useState } from 'react'
import {
    Flex,
    Spacer,
    Image,
    Text
} from "@chakra-ui/react"
import {
    Modal
} from 'react-bootstrap'
import styled from 'styled-components'
import ModalCarrito from './ModalCarrito'
import '../../style/carrito/styleCarrito.css'

const DivCart = styled.div`
    display: flex;
    flex-flow: column;
    justify-items: center;
    align-items: center;
`

const DivCCart = styled.div`
    text-align: center;
    margin-bottom: 16px;
`

const ButtonCCart = styled.button`
    width: 300px;
    background-color: transparent;
    border: none;
    text-align: left;
`

const TotalCCart = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding: 16px;
    width: 312px;
    height: 53px;
    background: #ffffff;
    box-shadow: 0px 10px 40px rgb(0 0 0 / 3%);
    border-radius: 20px;
`

const TextCCart1 = styled(Text)`
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
`

const TextDivNameCant = styled.div`
    margin: 12px;
`

const TextPName = styled(Text)`
    font-size: 12px;
    font-weight: bold;
`

const TextPCant = styled(Text)`
    color: #FA4A0C;
    font-weight: bold;
    font-size: 12px;
`

const TextPPrecio = styled(Text)`
    margin: 15px 0;
    color: #FA4A0C;
    font-weight: bold;
    font-size: 14px;
`

const ModalCCart = styled(Modal)`
    display: flex !important;
    justify-content: center;
    align-items: center;
`

let i = {}

const CategorieCarrito = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        i = e
        setShow(true)
    };

    let acum = 0
    let precio
    let cantidad

    props.categories.forEach(cart => {
        precio = cart.precio
        cantidad = cart.cantidad
        acum += (precio * cantidad)

    })

    const miFuncion = (e) => {
        handleShow(e)
    }

    return (
        <DivCart style={{ marginBottom: '35%' }}>
            {
                props.categories.map(cart => {
                    return (
                        <DivCCart key={`"cart"-${cart.nombre}`}>
                            <ButtonCCart onClick={(e) => {
                                (e.target.id === cart.id)
                                    && miFuncion(cart)
                            }}>
                                <Flex>
                                    <Image boxSize="56px" src={cart.imagen} alt={cart.nombre} />
                                    <TextDivNameCant>
                                        <TextPName id={cart.id}>{cart.nombre}</TextPName>
                                        <TextPCant>x{cart.cantidad}</TextPCant>
                                    </TextDivNameCant>
                                    <Spacer />
                                    <TextPPrecio>${cart.precio * cart.cantidad} MXN</TextPPrecio>
                                </Flex>
                            </ButtonCCart>
                        </DivCCart>
                    )
                })
            }
            <hr />
            <TotalCCart>
                <TextCCart1>Total</TextCCart1>
                <TextCCart1 style={{ color: "#FA4A0C" }}>$
                        {acum} MXN
                    </TextCCart1>
            </TotalCCart>
            <ModalCCart className="holaa" show={show} onHide={handleClose} >
                <ModalCarrito cart={i} handleClose={handleClose} />
            </ModalCCart>
        </DivCart>
    )
}

export default CategorieCarrito