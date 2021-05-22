import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Grid, GridItem } from '@chakra-ui/layout';

const StyledTextEncabezado = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    color: #0D0D0D;
    margin-top: 32px;
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
                Buscar
            </Link>
        </>
    )
}

export default Header