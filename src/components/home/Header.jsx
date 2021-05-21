import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import getProductoName from "../../selectors/getProductoName";
import styled from 'styled-components'
import { Form, FormControl, Image, Row } from 'react-bootstrap'

const StyledImageLogo = styled(Image)`
    width: 64px;
    height: 64px;
`

const StyledImageCarrito = styled(Image)`
    width: 24px;
    height: 24px;
    float: right;
    margin-top: -40px;
    margin-bottom: 15px;
`

const StyledTextEncabezado = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    color: #0D0D0D;
    margin-top: 32px;
`

const StyledFormSearch = styled(Form)`
    background: #E7E7E7;
    border-radius: 30px;
    color: #63717f;
    height: 60px;
    width: 100%;
    margin-top: 32px;
`
const StyledIconSearch = styled(Image)`
    font-size: 18px;
    
    margin-right: 8px;
    margin-left: 28px;
    display: inline-block;
`

const StyledInputSearch = styled(FormControl)`
    background: #E7E7E7;
    height: 40px;
    color: #65737e;
    border: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    color: #9A9A9D;
    margin-top: 10px;
`


const Header = ({history}) => {

    const location  = useLocation;
    const { palabra = ""} = queryString.parse(location.search)

    const productoFilter = useMemo(()=> getProductoName(palabra), [palabra])

    const handleSearch = (e) => {
        e.preventDefault()
        //history.push(`?palabra=${palabra}`)
        {console.log(productoFilter)}
    }

    return (
        <>
            <Row>
                <StyledImageLogo src="https://i.ibb.co/xLYZydk/logo.png" alt="Imagen de logo" />
                <StyledImageCarrito src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="Carrito" />
            </Row>
            <StyledTextEncabezado>Nada como una Guajolota para empezar el día</StyledTextEncabezado>
            <StyledFormSearch onSubmit = {handleSearch}>
                <StyledIconSearch src="https://i.ibb.co/ssJCP66/vector-search.png" alt="Icono de busqueda" />
                <StyledInputSearch type="text" id="search" placeholder="Sabor de guajolota, bebida..." />
            </StyledFormSearch>
        </>
    )
}

export default Header