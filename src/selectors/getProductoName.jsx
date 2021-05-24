// import axios from "axios";
// import React, { useState } from "react";
// import React, { Component } from 'react'
// let datos = []

let res
const getProductosByName = (palabra = '') => {
    //palabra = "verde"
    // console.log(palabra);
    // console.log(guajaProducts);
    // axios
    //     .get(`https://api-guajolotas.herokuapp.com/guajolotas`)
    //     .then(res => {
    //         datos = res.data
    //     })

    const handleSubmit = () => {
        //event.preventDefault();

        //
        //const response = await API.get(`https://api-guajolotas.herokuapp.com/guajolotas/`);

        //console.log(response);
        //console.log(response.data);


        async function obtenerProductos() {
            const result = await fetch('https://api-guajolotas.herokuapp.com/guajolotas/');
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
