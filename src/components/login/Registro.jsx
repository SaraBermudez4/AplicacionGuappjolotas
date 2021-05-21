import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import { useToast } from "@chakra-ui/react"


let usuario = [];
// let c;
// const usuarios = JSON.parse(localStorage.getItem("usuarios"))

const Registro = () => {
    const form_ref = useRef();
    const toast = useToast()
    const [_json, setJson] = useState(
        {
            nombreUsuario: "",
            contraseña: "",
            correo: "",
            direccion: ""

        }
    )
    const cambiarEstado = (e) => {
        setJson({
            ..._json,
            [e.target.name]: e.target.value,
        });
    }

    const envioRegistro = (e) => {
        e.preventDefault();
        // let name = document.getElementById('userR').value;
        // c = usuarios.filter((u) => u.nombreUsuario == name)
        // console.log(c);
        // // console.log(c[0].nombreUsuario);
        // console.log(c.nombreUsuario != name);
        // if(usuarios != null){
            // if(c[0].nombreUsuario != name){
                usuario.push(_json);
                console.log(usuario);
                localStorage.setItem("usuarios", JSON.stringify(usuario));
                form_ref.current.reset();
                toast({
                    title: "Registro Satisfactorio",
                    description: "Usted ha registrado correctamente",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            // }
        //     else{
        //         toast({
        //             title: "Usuario ya existente",
        //             description: "Los datos ingresados ya se encuentran",
        //             status: "error",
        //             duration: 9000,
        //             isClosable: true,
        //         })
        //     }
        // }

    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Registrarme</h2>
            <Form className='container' onSubmit={envioRegistro} ref = {form_ref}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Usuario" onChange={cambiarEstado} name="nombreUsuario" maxlength = '10' required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Contraseña"  onChange={cambiarEstado} name="contraseña" maxlength = '16'  required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Correo Electrónico"  onChange={cambiarEstado} name="correo" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Dirección"  onChange={cambiarEstado} name="direccion" maxlength = '30' required/>
                </Form.Group>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </Form>
        </div>
    )
}

export default Registro