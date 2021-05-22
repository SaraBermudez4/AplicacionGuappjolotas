import { GridItem } from '@chakra-ui/layout';
import { Grid } from '@chakra-ui/layout';
import React, { Component } from 'react'
import styled from 'styled-components';

const Retorno = styled(GridItem)`
         margin-top:44px;
         margin-left:24px;
         width:24px;
         height:24px;
         `

const Carrito = styled(GridItem)`
         float: right;
         margin-top:44px;
         margin-right:24px;
         width:24px;
         height:24px;
         `

export default class Header extends Component {
    render() {
        return (
            <div>
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <Retorno><img src="https://i.ibb.co/ZGqLjJJ/vector-chevron-left.png" alt="vector-chevron-left" border="0" /></Retorno>
                    <Carrito colStart={6} colEnd={7} h="10"><img src="https://i.ibb.co/ChmcXxb/vector-shop-cart.png" alt="vector-shop-cart" border="0" /></Carrito>
                </Grid>
            </div>
        )
    }
}
