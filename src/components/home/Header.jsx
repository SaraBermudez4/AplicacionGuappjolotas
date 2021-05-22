import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import getProductoName from "../../selectors/getProductoName";
import styled from 'styled-components'
import { Form, FormControl, Image, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { Grid, GridItem } from '@chakra-ui/layout';
import useForm from '../../hooks/useForm';

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
const StyledLogo = styled(GridItem)`
    width:64px;
    height:64px;
`

const StyledCarrito = styled(GridItem)`
    float: right;
    margin-top:24px;
    width:24px;
    height:24px;
`

const Header = () => {

    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                <StyledLogo><img src="https://i.ibb.co/xLYZydk/logo.png" alt="Imagen de logo" /></StyledLogo>
                <StyledCarrito colStart={6} colEnd={7} h="10"><img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" /></StyledCarrito>
            </Grid>
            <StyledTextEncabezado>Nada como una Guajolota para empezar el día</StyledTextEncabezado>
            <Link to="/search">
                <StyledFormSearch>
                    <StyledIconSearch src="https://i.ibb.co/ssJCP66/vector-search.png" alt="Icono de busqueda" />
                    <StyledInputSearch type="text" id="search" placeholder="Sabor de guajolota, bebida..." onChange={handleInputChange} autoComplete="off" />
                </StyledFormSearch>
            </Link>
        </>
    )
}

export default Header