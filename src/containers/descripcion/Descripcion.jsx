import React, { Component } from 'react';
import Header from '../../components/descripcion/Header';
import Productos from '../../components/descripcion/Productos';
import Cantidad from '../../components/descripcion/Cantidad';
import Sabores from '../../components/descripcion/Sabores';
import Guajolocombo from '../../components/descripcion/Guajolocombo';
import BotonCarrito from '../../components/descripcion/BotonCarrito';
import { ChakraProvider } from '@chakra-ui/react';



export default class Descripcion extends Component {
    render() {
        return (
            <div>
                <ChakraProvider>
                <Header />
                <Productos />
                <Cantidad />
                <Sabores />
                <Guajolocombo />
                <BotonCarrito />
                </ChakraProvider>
            </div>
        )
    }
}
