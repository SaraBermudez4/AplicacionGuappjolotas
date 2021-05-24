import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { useToast } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Estilos 
const StyledFormContainer = styled(Form)`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
`
const StyledButtomSend = styled.button`
    background: #FA4A0C;
    border: none;
    box-shadow: 0px 10px 10px -6px black;
    border-radius: 40px;
    padding: 12px 24px;
    color: #F6F6F9;
`

let usuario = [];

const Registro = () => {
    const form_ref = useRef();
    const toast = useToast()
    const [_json, setJson] = useState(
        {
            nombreUsuario: "",
            contraseña: "",
            correo: "",
            direccion: ""
        }
    )
    const cambiarEstado = (e) => {
        setJson({
            ..._json,
            [e.target.name]: e.target.value,
        });
    }

    const envioRegistro = (e) => {
        e.preventDefault();
        usuario.push(_json);
        localStorage.setItem("usuarios", JSON.stringify(usuario));
        form_ref.current.reset();
        toast({
            title: "Registro Satisfactorio",
            description: "Usted ha registrado correctamente",
            status: "success",
            duration: 9000,
            isClosable: true,
        })
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ fontSize: '23px', fontWeight: 'bold', marginBottom: '10px' }}>Bienvenido al Registro</h2>
            <StyledFormContainer className='container' onSubmit={envioRegistro} ref={form_ref}>
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Nombre de usuario</Form.Label>
                    <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="text" placeholder="Ingrese Usuario" onChange={cambiarEstado} name="nombreUsuario" maxLength='10' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Contraseña</Form.Label>
                    <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="password" placeholder="Ingrese Contraseña" onChange={cambiarEstado} name="contraseña" maxLength='16' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative', margin: '0px' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }} >Correo Electrónico</Form.Label>
                    <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="email" placeholder="Ingrese Correo Electrónico" onChange={cambiarEstado} name="correo" style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <Form.Group style={{ position: 'relative' }}>
                    <Form.Label className='mt-2 mb-2' style={{ fontWeight: 'bold' }}>Dirección</Form.Label>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ position: 'absolute', pointerEvents: 'none', marginBottom: '10px', marginLeft: '10px', color: 'black', left: '1px', bottom: '1px' }} />
                    <Form.Control type="text" placeholder="Ingrese Dirección" onChange={cambiarEstado} name="direccion" maxLength='30' style={{ paddingLeft: '35px', paddingRight: '35px' }} required />
                </Form.Group>
                <StyledButtomSend type='submit' >Enviar</StyledButtomSend>
            </StyledFormContainer>
        </div>
    )
}

export default Registro