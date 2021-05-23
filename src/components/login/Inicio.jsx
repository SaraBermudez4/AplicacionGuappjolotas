import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import { useToast } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, Redirect } from 'react-router-dom'
let global 
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
    color: white;
`
let users;

const Inicio = () => {
    const logueado = useRef("/")
    const toast = useToast()
    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usuarios);
    const envioInicio = () => {
        let name = document.getElementById('user').value;
        let password = document.getElementById('password').value;
        if (name == "" || password == "") {
            toast({
                title: "Error",
                description: "Por favor llene todos los campos",
                status: "warning",
                duration: 9000,
                isClosable: true,
            })
        } else {
            // console.log(name, password);
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
                console.log(users[0]);
                if (users[0] == undefined) {
                    toast({
                        title: "Datos erróneos",
                        description: "Valide sus datos o realice el registro",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })

                } else {

                    if (password == users[0].contraseña) {
                        toast({
                            title: "Bienvenido",
                            description: "Usted ha ingresado satisfactoriamente",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                        })
                        //return console.log("Hola");
                        //<Redirect to = "/"/>
                        //<Redirect to = {global}/>
                        //global = "/"
                        localStorage.setItem("logueado", true)
                        //this.props.history.push('/home');
                        window.location.reload()
                    }
                    else {
                        toast({
                            title: "Datos erróneos",
                            description: "Valide sus datos o realice el registro",
                            status: "error",
                            duration: 9000,
                            isClosable: true,
                        })
                        localStorage.setItem("logueado", false)
                    }
                }
            }
            //verifyRoute()
        }
        //const verifyRoute = () => {
            if (localStorage.getItem('logueado')) {
                <Redirect to = "/"/>
            }
        //};
        
    }

    useEffect(() => {
        console.log("componentDidMount");
        console.log("componentDidUpdate");

        return () => {
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
                    <Form.Control type="text" placeholder="Ingrese Usuario" id='user' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                </Form.Group>
                {/* Contraseña */}
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="password" placeholder="Ingrese Contraseña" id='password' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                </Form.Group>
            </Form>
            <StyledButtom onClick={envioInicio}>Entrar
                
            </StyledButtom>
        </StyledFormContainer>
    )
}

export default Inicio;
