import React from 'react'
import {
    Flex,
    Spacer,
    Image,
    Text
} from "@chakra-ui/react"
import styled from 'styled-components'
//import { categories } from '../utils/mocks/categories'

const DivCCart = styled.div`
    text-align: center;
`

const ButtonCCart = styled.button`
    width: 300px;
    background-color: transparent;
    border: none;
    text-align: left;
`

const TotalCCart = styled.div`
    text-align: center;
    width: 312px;
    height: 53px;
    margin: 0 0 0 50px;
    border-radius: 20px;
    background-color: #ffffff;
`

const TextCCart1 = styled(Text)`
    margin-left: 20px;
    margin-right: 20px;
`

const CategorieCarrito = (props) => {
    console.log(props)
    
    return (
        <>
            {
                props.categories.map(cart => {
                    return (
                        <DivCCart key={`"cart"-${cart.nombre}`}>
                            <ButtonCCart>
                                <Flex>
                                    <Image boxSize="56px" src={cart.imagen} alt={cart.nombre} />
                                    <Spacer />
                                    <div>
                                        <Text>{cart.nombre}</Text>
                                        <Text>x{cart.cantidad}</Text>
                                    </div>
                                    <Spacer />
                                    <Text>${cart.precio * cart.cantidad} MXN</Text>
                                </Flex>
                            </ButtonCCart>
                        </DivCCart>
                    )
                })
            }
            <hr />
            <TotalCCart>
                <Flex>
                    <TextCCart1>Total</TextCCart1>
                    <Spacer />
                    <TextCCart1>$137 MXN</TextCCart1>
                </Flex>
            </TotalCCart>
        </>
    )
}

export default CategorieCarrito