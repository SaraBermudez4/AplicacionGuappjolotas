import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

const NavFixed = styled.div`
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 101px;
  text-align: center;
`

const NavButton = styled.button`
    margin-top: 17px;
    width: 312px;
    height: 69px;
    text-align: center;
    border-radius: 40px;
    background-color: #FA4A0C;
    border: none;
    
`
const ContenedorTexto = styled.p`
     font-family: Inter;
     font-style: normal;
     font-weight: 600;
     font-size: 17px;
     line-height: 21px;
     text-align: right;
     color: #F6F6F9;
     text-align:center;
`


export default class BotonCarrito extends Component {
    render() {
        return (

            <NavFixed>
                <NavButton>
                    <Row>
                  <Col><ContenedorTexto>Agregar 2 al Carrito $150.000</ContenedorTexto></Col> 
                   </Row>
                </NavButton>
            </NavFixed>

        )
    }
}
