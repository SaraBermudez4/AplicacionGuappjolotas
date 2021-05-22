import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselCaption, Spinner } from 'react-bootstrap'
import styled from 'styled-components';
import axios from 'axios';
import  '../../styles/Styles.css'

const ImagenCarousel = styled.img`
         display:block;
         margin-right:auto;
         margin-left:auto;
         width: 200px;
         height: 200px;
`
const Descripcion = styled.h3`
     color:black;
     font-family: Inter;
     font-style: normal;
     font-weight: 600;
     font-size: 28px;
     line-height: 34px;
     text-align: center;
     margin-top:25px;
`

const Precio = styled.p`
     font-family: Inter;
     font-style: normal;
     font-weight: 600;
     font-size: 22px;
     line-height: 27px;
     text-align: center;
     color: #FA4A0C;
`

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`



export default class Productos extends Component {

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
      <div>
        <Carousel interval={null}>
          {
            this.state.data.map(guajolotas => {
              return (

                <Carousel.Item key={guajolotas.sabor.nombreSabor}>
                  <ImagenCarousel src={guajolotas.imagen} alt={guajolotas.nombre} border="0" />
                  <Descripcion>{guajolotas.nombre}</Descripcion>
                  <Precio>${guajolotas.precio} MXN</Precio>
                </Carousel.Item>
              )
            })
          }
        </Carousel>

      </div>
    )
  }
}
