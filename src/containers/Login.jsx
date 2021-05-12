import React from 'react';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../components/Logo.jsx';
import { formularios } from '../utils/mocks/formularios';
import axios from 'axios';

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

`;

// Components formulario 


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.pruebaClick = this.pruebaClick.bind(this);
        this.state = {
            loading: true,
            error: null,
            data: undefined,
        };
    }
    pruebaClick(e) {
        e.preventDefault();
        let nombre = document.getElementById('nombre-usuario').value;
        localStorage.setItem("nombre", nombre);
        let obtenerNombre = localStorage.getItem("nombre");
        console.log(obtenerNombre);
    }

    fetchFormsData = () => {
        this.setState({
            loading: true,
            error: null
        })

        axios
            .get("http://localhost:3004/login")
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                })
            })
    }

    componentDidMount() {
        this.fetchFormsData();
    }

    render() {

        if (this.state.loading == true && !this.state.data) {
            return <h1>Cargado...</h1>
        }

        if (this.state.error) {
            return <h1>No se ha podido cargar la pagina</h1>
        }

        console.log(this.state.data);

        return (
            <React.Fragment>
                <PrincipalContainer>
                    <Row>
                        <StyledCol xs={12}>
                            <Logo />
                        </StyledCol >
                    </Row>
                    {formularios.map(formulario => {
                        return (
                            <Row style={{ justifyContent: 'center', padding: '50px' }} key = {`${formulario.name} - ${formulario.boton }`}>
                                <StyledForm>   
                                    <Form.Label>{formulario.name}</Form.Label>
                                    <Form.Group controlId="formBasicEmail" style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', pointerEvents: 'none', marginTop: '8px', marginLeft: '10px' }} />
                                        <Form.Control type="text" placeholder="Ingresa Usuario" id='nombre-usuario' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                                    </Form.Group>
                                    <Form.Label>{formulario.contraseña}</Form.Label>
                                    <Form.Group controlId="formBasicPassword" style={{ position: 'relative' }}>
                                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', pointerEvents: 'none', marginTop: '8px', marginLeft: '10px' }} />
                                        <Form.Control type="password" placeholder="Contraseña" id='password-usuario' style={{ paddingLeft: '35px', paddingRight: '35px' }} />
                                    </Form.Group>
                                    <StyledButton type="submit" onClick={this.pruebaClick}>
                                        {formulario.boton}
                                    </StyledButton>
                                </StyledForm>
                                <StyledCol xs={12}>
                                    <span style={{ paddingRight: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No tengo una cuenta </span>
                                    <div>
                                        <StyledBottonRegistro variant="primary">Registrarme</StyledBottonRegistro>
                                    </div>
                                </StyledCol >
                            </Row>
                        )
                    })}
                </PrincipalContainer>
            </React.Fragment>
        )
    }
}

export default Login;
