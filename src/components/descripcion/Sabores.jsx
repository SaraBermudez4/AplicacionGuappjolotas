import React, { Component } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

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

export default class Sabores extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: undefined,
            error: null
        }
    }

    fetchGuajalotaData = () => {
        this.setState({
            loading: true,
            error: null
        })

        axios
            .get("http://localhost:3004/guajolotas")
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data
                })
            })
            .catch(res => {
                this.setState({
                    loading: false,
                    error: res.error
                })
            })

    }

    componentDidMount() {
        this.fetchGuajalotaData();
    }

    render() {


        if (this.state.loading === true && !this.state.data) {
            return(
              <div>
            <Carga animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Carga>
            </div>)
          }
      
          if (this.state.error) {
            return <h1>No se ha podido cargar la pagina</h1>
          }

        return (
            <Container>
                <Titulo>Sabor</Titulo>
                <ContainerSabor>
                    <Row>
                        {
                            this.state.data.map(guajolotas => {
                                return (
                                    <Col xs={4} mb={5}><button><ImgSabores src={guajolotas.sabor.imagenSabor} alt={guajolotas.sabor.nombreSabor} border="0" /></button></Col>
                                )
                            })
                        }
                    </Row>

                </ContainerSabor>
            </Container>
        )
    }
}
