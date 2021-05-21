import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import { useToast } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

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

const StyledButtom = styled.button`
    background: #FA4A0C;
    border: none;
    box-shadow: 0px 10px 10px -6px black;
    border-radius: 40px;
    padding: 12px 24px;
    margin-top: 10px;
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
                    <h1 style={{ fontSize: '23px', fontWeight: 'bold' }} className='mt-2 mb-4'>Iniciar Sesión</h1>
                </Col>
            </Row>
            <Form className='container'>
                {/* Nombre de usuario */}
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="text" placeholder="Ingrese Usuario" id='user' style={{ paddingLeft: '35px', paddingRight: '35px' }}/>
                </Form.Group>
                {/* Contraseña */}
                <Form.Group  style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="password" placeholder="Ingrese Contraseña" id='password' style={{ paddingLeft: '35px', paddingRight: '35px' }}/>
                </Form.Group>
            </Form>
            <StyledButtom className='btn btn-primary' onClick={envioInicio}>Entrar</StyledButtom>
        </StyledFormContainer>
    )
}

export default Inicio;
