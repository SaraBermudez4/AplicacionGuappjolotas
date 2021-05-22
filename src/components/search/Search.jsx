import React, {useState} from 'react'
import styled from 'styled-components';
import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const StyledSearchContainer = styled(Container)`
    background: #F2F2F2;
    height: 100vh;
    font-family: 'Inter', sans-serif;
`
const StyledSearchInput = styled.input`
    width: 220px; 
    height: 60px; 
    border-radius: 40px;
    border: none;
    background: #E7E7E7;
    padding-left: 55px !important;
    padding-right: 0px !important; 
`

const StyledTextCancelar = styled(Col)`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 44px;
`

const StyledPcancelar = styled.p`
    font-size: 17px;
    font-weight: bold;
    margin-right: 24px;
    margin-top: 10px;
`

const StyledRowContainerMainImage = styled(Row)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    text-align: center;
`
const StyledResultadoOneSearch = styled.p`
    margin-top: 24px;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;

`



const RealizarBusqueda = () => {
    return (
        <div>
            <img src='https://i.ibb.co/CwB3fBC/vector-feather-search.png' />
            <StyledResultadoOneSearch>Realizar una búsqueda</StyledResultadoOneSearch>
        </div>
    )
}

const NoEncontrado = () => {
    return (
        <div>
            <img src='https://i.ibb.co/CwB3fBC/vector-feather-search.png' />
            <StyledResultadoOneSearch>No hay resultados</StyledResultadoOneSearch>
        </div>
    )
}


const Search = () => {
    const [stateSearch, setSearch] = useState(true)

    return (
        <React.Fragment>
            <StyledSearchContainer fluid>
                <Row>
                    <Col xs={8} style={{ position: 'relative', margin: '0px', marginTop: '44px' }}>
                        <img src='https://i.ibb.co/ssJCP66/vector-search.png' style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '20px', marginLeft: '25px', color: 'black', bottom: '1px', }} />
                        < StyledSearchInput type='search' style={{ paddingLeft: '35px', paddingRight: '35px', }} placeholder='Sabor de guajolo...'  onClick = {() => {
                            setSearch(!stateSearch)
                        }}/>
                    </Col>
                    <StyledTextCancelar xs={4}>
                        <StyledPcancelar>Cancelar</StyledPcancelar>
                    </StyledTextCancelar>
                </Row>
                < StyledRowContainerMainImage>
                    <Col xs={12}>
                        {
                            stateSearch ? <RealizarBusqueda/> : <NoEncontrado/>
                        }
                    </Col>
                </ StyledRowContainerMainImage>
            </StyledSearchContainer>
        </React.Fragment>
    )
}

export default Search
