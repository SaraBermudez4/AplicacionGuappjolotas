import axios from "axios";
import React, { useState } from "react";
import API from './api';
//import { heroes } from '../data/heroes';
const guajaProducts = axios.get(`http://localhost:3004/guajolotas`)
// const bebiProducts = axios.get(`http://localhost:3004/Bebidas`)
// const tamaProducts = axios.get(`http://localhost:3004/Tamales`)
let datos = []

// import React, { Component } from 'react'

// export default class getProductoName extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             loading: true,
//             error: null,
//             data: "",
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
//         return {
//             if(palabra === '') {
//             return [];
//         }

//         palabra = palabra.toLocaleLowerCase();
//         return console.log(datos.filter(p => p.nombre.toLocaleLowerCase().includes(palabra)))
//         console.log(data);


//     }

// }



const getProductosByName = (palabra = '') => {
    //palabra = "verde"
    console.log(palabra);
    console.log(guajaProducts);

    // axios
    //     .get(`http://localhost:3004/guajolotas`)
    //     .then(res => {
    //         datos = res.data
    //     })


    const handleSubmit = async event => {
        //event.preventDefault();

        //
        const response = await API.get(`http://localhost:3004/guajolotas/`);

        //console.log(response);
        //console.log(response.data);

        if (palabra === '') {
            return [];
        }

        palabra = palabra.toLocaleLowerCase();
        return console.log(response.data.filter(p => p.nombre.toLocaleLowerCase().includes(palabra)))
    };
    handleSubmit()


    //console.log(data);
}
export default getProductosByName
