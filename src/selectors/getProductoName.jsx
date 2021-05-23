import { Center } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState } from "react";
// import React, { Component } from 'react'
import { Spinner } from "react-bootstrap";
import API from './api';
import styled from "styled-components"
//import { heroes } from '../data/heroes';
const guajaProducts = axios.get(`http://localhost:3004/guajolotas`)
// const bebiProducts = axios.get(`http://localhost:3004/Bebidas`)
// const tamaProducts = axios.get(`http://localhost:3004/Tamales`)
let datos = []
const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`
// export default class getProductoName extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: true,
//             error: null,
//             data: "",
//             palabra: props
//         }
//     }

//     fetchProductosData = () => {
//         this.setState({
//             loading: true,
//             error: null
//         })

//         axios
//             .get(`http://localhost:3004/guajolotas`)
//             .then(res => {
//                 this.setState({
//                     loading: false,
//                     data: res.data
//                 })
//             })
//             .catch(error => {
//                 this.setState({
//                     loading: false,
//                     error: error
//                 })
//             })
//     }

//     componentDidMount() {
//         this.fetchProductosData()
//     }

//     // filtrar = () => {
//     //     if (palabra === '') {
//     //         return [];
//     //     } else {
//     //         palabra = palabra.toLocaleLowerCase();
//     //         return console.log(datos.filter(p => p.nombre.toLocaleLowerCase().includes(palabra)));
//     //         // console.log(data);
//     //     }
//     // }

//     render() {

//         if (this.state.loading && !this.state.data) {
//             return (
//                 <Center>
//                     <Spinner
//                         thickness="4px"
//                         speed="0.9s"
//                         emptyColor="gray.200"
//                         color="orange.400"
//                         size="xl"
//                         marginTop="100%" />
//                 </Center>
//             )
//         } if (this.state.error) {
//             return <h1>Vaya vaya, en mi pc si funcionaba</h1>
//         }
//         console.log(this.state);
//         return (
//             <di>

//             </di>

//         )

//     }

// }


let res
const getProductosByName = (palabra = '') => {
    //palabra = "verde"
    // console.log(palabra);
    // console.log(guajaProducts);

    // axios
    //     .get(`http://localhost:3004/guajolotas`)
    //     .then(res => {
    //         datos = res.data
    //     })


    const handleSubmit = () => {
        //event.preventDefault();

        //
        //const response = await API.get(`http://localhost:3004/guajolotas/`);

        //console.log(response);
        //console.log(response.data);


        async function obtenerProductos() {
            const result = await fetch('http://localhost:3004/guajolotas/');
            res = await result.json();
            // console.log(res);
            if (palabra === '') {
                return [];
            }
            else {
                palabra = palabra.toLocaleLowerCase();
                return res.filter(p => p.nombre.toLocaleLowerCase().includes(palabra))
            }
        };
        obtenerProductos();
    };
    handleSubmit()


    //console.log(data);
}
export default getProductosByName
