import React from 'react'
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../components/Logo.jsx';
import { formularios } from '../utils/mocks/formularios';
import axios from 'axios';
import { Link } from 'react-router-dom';



const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 20px;
`;

const StyledButton = styled(Button)`
    background-color: #FA4A0C;
    border: 1px solid #FA4A0C;
    border-radius: 40px;
    padding: 10px; 
    margin-top: 20px; 
    font-size: 17px;
    font-weight: 600;
`;

const StyledBottonRegistro = styled(Button)`
    background-color: #FA4A0C;
    border: 1px solid #FA4A0C;
    font-weight: 600;
    border-radius: 40px;
    width: 150px;
    height: 40px; 
`;

const StyledBarraFooter = styled(Row)`
    margin-top: 100px;
    display: flex; 
`


export default function Categorieform(props) {
    return (
        <React.Fragment>
            {props.formularios.map(formulario => {
                console.log(formulario);
                return (
                    <Row style={{ justifyContent: 'center', padding: '50px' }} key={`${formulario.name} - ${formulario.id}`}>
                        <Link to={`${props.section} - ${formulario.id}`}>
                            <StyledForm>
                                <Form.Label>{formulario.name}</Form.Label>
                                <Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
                                    <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', pointerEvents: 'none', marginTop: '8px', marginLeft: '10px', color: 'black' }} />
                                    <Form.Control type="text" placeholder="Ingresa Usuario" id='nombre-usuario' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                                </Form.Group>
                                <Form.Label>{formulario.contraseña}</Form.Label>
                                <Form.Group controlId="formBasicPassword" style={{ position: 'relative' }}>
                                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', pointerEvents: 'none', marginTop: '8px', marginLeft: '10px', color: 'black' }} />
                                    <Form.Control type="password" placeholder="Contraseña" id='password-usuario' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                                </Form.Group>
                                <StyledButton type="submit" >
                                    {formulario.boton}
                                </StyledButton>
                            </StyledForm>
                            <StyledBarraFooter>
                                <Col xs={12} style = {{display: 'flex'}}>
                                    <span style={{ paddingRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px', color: 'black', fontWeight: '600' }}>{formulario.descripcion} </span>
                                    <StyledBottonRegistro variant="primary" onClick = {(e) => {  
                                        props.onClick(e, "registro")
                                    }}>{formulario.interaccion}</StyledBottonRegistro>    
                                </Col>
                            </StyledBarraFooter>
                        </Link>
                    </Row>
                )
            })}
        </React.Fragment>
    )
}
