import React from 'react';
import './login.css';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import logo from './logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';


const PrincipalContainer = styled(Container)`
    background-color: #F6F6F9;
    font-family: 'Inter', sans-serif;
    height: 100vh;
`;

const StyledCol = styled(Col)`
    display: flex;
    justify-content: center;
    padding-top: 60px;
`;

const SytyledColSpam = styled(Col)`
    font-size: 14px; 
    text-align: center;
    font-weight: 500; 
    padding-right: 10px;
`; 
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    font-size: 20px;
`;

const StyledButton = styled(Button) `
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

`;



class Login extends React.Component {
    constructor(props){
        super(props);
        this.pruebaClick = this.pruebaClick.bind(this); 
    }
    pruebaClick(e){
        e.preventDefault();
        alert("Si funciona");
    }

    render() {
        return (
            <React.Fragment>
                <PrincipalContainer>
                    <Row>
                        <StyledCol xs={12}>
                            <img src={logo}></img>
                        </StyledCol >
                    </Row>
                    <Row style = {{justifyContent: 'center', padding: '50px'}}>
                        <StyledForm>
                                <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Group controlId="formBasicEmail" className = 'form-usuario'>
                                <FontAwesomeIcon  icon = {faUser} className = 'users-icon'/>
                                <Form.Control type="text" placeholder="Ingresa Usuario" className = 'user-input-text'/>
                            </Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                            <Form.Group controlId="formBasicPassword" className = 'form-usuario'>
                                <FontAwesomeIcon icon = {faLock} className = 'users-icon'/>
                                <Form.Control type="password" placeholder="Contraseña" className = 'user-input-text'/>
                            </Form.Group>
                            <StyledButton  type="submit" onClick = {this.pruebaClick}>
                                Ingresar
                            </StyledButton>
                        </StyledForm>
                    </Row>
                    <Row>
                        <StyledCol  xs = {12}>
                            <span style = {{paddingRight: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>No tengo una cuenta </span>
                            <StyledBottonRegistro variant="primary">Registrarme</StyledBottonRegistro>
                        </StyledCol >
                    </Row>
                </PrincipalContainer>
            </React.Fragment>
        )
    }
}

export default Login;
