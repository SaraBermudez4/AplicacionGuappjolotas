import React, { useState, useEffect } from 'react'
import Inicio from './Inicio.jsx'
import Registro from './Registro.jsx'
import styled from 'styled-components';

const StyledMainContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Inter', sans-serif;
    background-color: #F2F2F2;
`

const UserCheck = () => {
    const [verHijo, setVerHijo] = useState(true)

    return (
        <StyledMainContainer>
            <img src='https://i.ibb.co/xLYZydk/logo.png' />
            {
                verHijo ? <Inicio /> : <Registro />
            }
            <br/>
            <button onClick={() => {
                setVerHijo(!verHijo);
            }} className = 'btn btn-primary'> {verHijo ? "Registrarme" : "Volver"}
            </button>
        </StyledMainContainer>
    )

}
export default UserCheck;

