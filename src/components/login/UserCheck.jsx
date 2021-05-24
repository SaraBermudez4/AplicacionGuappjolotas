import React, { useState } from 'react'
import Inicio from './Inicio.jsx'
import Registro from './Registro.jsx'
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

const StyledMainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    background-color: #F2F2F2;
`

const StyledColButtomContainer = styled(Col)`
    text-align: center; 
    display: flex; 
    justify-content: center;
    align-items: center; 
`

const StyledButtom = styled.button`
    background: #FA4A0C;
    border: none;
    box-shadow: 0px 10px 10px -6px black;
    border-radius: 40px;
    padding: 8px 20px;
    color: #F6F6F9;
`

const StyledCheckRef = styled(Col)`
    font-weight: bold;
    font-size: 15px; 
    display: flex; 
    justify-content: center;
    align-items: center; 
`

const StyledRegistroCheck = styled(Col)`
    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserCheck = () => {
    const [verHijo, setVerHijo] = useState(true)

    return (
        <StyledMainContainer>
            <img src='https://i.ibb.co/xLYZydk/logo.png' style={{ marginBottom: '10px' }} alt="Imagen del logo" />
            {
                verHijo ? <Inicio /> : <Registro />
            }

            <Row style={{ marginTop: '25px', textAlign: 'center' }}>
                {
                    verHijo ? <StyledCheckRef xs={6}>No tengo una cuenta</StyledCheckRef> : <StyledRegistroCheck xs={6}> Ya tengo una cuenta</StyledRegistroCheck>
                }

                <StyledColButtomContainer xs={6}>
                    < StyledButtom onClick={() => {
                        setVerHijo(!verHijo);
                    }} > {verHijo ? "Registrarme" : "Volver"}
                    </ StyledButtom>
                </StyledColButtomContainer>
            </Row>
        </StyledMainContainer>
    )

}
export default UserCheck;

