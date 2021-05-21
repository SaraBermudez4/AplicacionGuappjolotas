import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import { useToast } from "@chakra-ui/react"

const StyledFormContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const StyledLabelContainer = styled.label`
     display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
let users;

const Inicio = () => {

    const toast = useToast()
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usuarios);
    const envioInicio = () => {
        let name = document.getElementById('user').value;
        let password = document.getElementById('password').value;
        console.log(name, password);
        let verde = false;
        let rojo = false;
        let naranja = false;
        if (usuarios == null) {
            toast({
                title: "Usuario no registrado",
                description: "Registrate primero para poder ingresar",
                status: "info",
                duration: 9000,
                isClosable: true,
            })
        }
        else {
            users = usuarios.filter((u) => u.nombreUsuario == name)
            // if(name == u.nombreUsuario){
            //     return console.log("Hola!");
            // }
            if (password == users[0].contraseña) {
                toast({
                    title: "Bienvenido",
                    description: "Usted ha ingresado satisfactoriamente",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
            else {
                toast({
                    title: "Datos erróneos",
                    description: "Valide sus datos o realice el registro",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            }
            console.log(users);
        }
    }

    useEffect(() => {
        console.log("componentDidMount");
        console.log("componentDidUpdate");

        return () => {
            // componentWillUnmount
            console.log("componentWillUnmount");
        }

    });
    return (
        <StyledFormContainer>
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: '25px', fontWeight: 'bold' }} className='mt-2 mb-4'>Iniciar Sesión</h1>
                </Col>
            </Row>
            <Form className='container'>
                {/* Nombre de usuario */}
                <Form.Group >
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Usuario" id='user' />
                </Form.Group>
                {/* Contraseña */}
                <Form.Group >
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Contraseña" id='password' />
                </Form.Group>
            </Form>
            <button className='btn btn-primary' onClick={envioInicio}>Entrar</button>
        </StyledFormContainer>
    )
}

export default Inicio;
