import React from 'react';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Logo from '../components/Logo.jsx';
import { formularios } from '../utils/mocks/formularios';
import axios from 'axios';
import Categorieform from '../components/Categorieform.jsx';

localStorage.setItem('formCategorie', "login");

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
        // this.pruebaClick = this.pruebaClick.bind(this);
        this.state = {
            categorie: localStorage.getItem('formCategorie'),
            loading: true,
            error: null,
            data: undefined,
        };
    }
    // pruebaClick(e) {
    //     e.preventDefault();
    //     let nombre = document.getElementById('nombre-usuario').value;
    //     localStorage.setItem("nombre", nombre);
    //     let obtenerNombre = localStorage.getItem("nombre");
    //     console.log(obtenerNombre);
    // }

    fetchFormsData = () => {
        this.setState({
            loading: true,
            error: null
        })

        axios
            .get(`http://localhost:3004/${this.state.categorie}`)
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
    // Renderiza los componentes una sola vez 
    componentDidMount() {
        this.fetchFormsData();
    }
    // Vuelve a renderizar los componentes 
    componentDidUpdate(prevProps, prevState) {
        if (prevState.categorie !== this.state.categorie) {
            this.fetchFormsData()
        }
    }

    handleClickSelection = (e, section) => {
        e.preventDefault();
        localStorage.setItem('formCategorie' , section)
        this.setState({
            categorie: localStorage.getItem('formCategorie')
        })
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
                    <Categorieform section={this.state.categorie} formularios={this.state.data} onClick = {this.handleClickSelection}/>
                </PrincipalContainer>
            </React.Fragment>
        )
    }
}

export default Login;
{/* <StyledBottonRegistro variant="primary" onClick={(e)=> {
    e.preventDefault()
    localStorage.setItem('formCategorie' , "registro")
    this.setState({
        categorie: localStorage.getItem('formCategorie')
    })
}}>Registrarme</StyledBottonRegistro> */}
