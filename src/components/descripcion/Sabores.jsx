import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-router-dom"
const Container = styled.div`
       margin: 24px;
`
const Titulo = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #0D0D0D;
    text-align: left;
`
const ContainerSabor = styled.div`
      margin-top:24px;
`

const ImgSabores = styled.img`
      width:64px;
      height:69px;
      display: block;
      margin-left:auto;
      margin-right:auto;
`
const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`
const NoOpaco = (props) => {
    if (props.productos == "") {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }
    return <ImgSabores src={props.prod.sabor.imagenSabor} alt={props.prod.sabor.nombreSabor} border="0" />
}

const Opaco = (props) => {
    if (props.productos == "") {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }
    return <ImgSabores style={{ opacity: "0.2" }} src={props.prod.sabor.imagenSabor} alt={props.prod.sabor.nombreSabor} border="0" />
}

const Sabores = (props) => {
    // useEffect( () => console.log('Refresh'));
    const [state, setstate] = useState(true)
    const handleClick = (id) => {
        setstate(true)
    }

    if (props.productos == undefined) {
        return (
            <div>
                <Carga animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Carga>
            </div>
        )
    }


    return (
        <Container style={{ textAlign: "center" }}>
            <Titulo>Sabor</Titulo>
            <ContainerSabor>
                <Row>
                    {
                        props.productos.map(guajolotas => {
                            return (
                                <Col xs={4} mb={5}>
                                    <Link to={`${guajolotas.id}`}>
                                        <button >
                                            {
                                                (guajolotas.id == props.especifico.id)
                                                    ?
                                                    <NoOpaco prod={props.especifico} />
                                                    :
                                                    <Opaco prod={guajolotas} />
                                            }
                                        </button>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </ContainerSabor>
        </Container>
    )
}

export default Sabores
