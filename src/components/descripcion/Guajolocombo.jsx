import React, { Component } from 'react'
import { Checkbox, Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components';
import axios from 'axios'
import { Spinner } from 'react-bootstrap';

const CajaGuajo = styled(Grid)`
      border-radius:20px;
      background-color:white;
      width: 152px !important;
      height: 138px !important;
      margin:10px;
      `

const GridCheck = styled(GridItem)`
      text-align: right;
      margin-top: 19px;
      margin-right: 19px;
      `

const GridImg = styled(GridItem)`
      margin: 16px 0 0 16px;
      `

const GridText = styled(GridItem)`
      margin: 0 16px 16px 16px;
      `
const CheckGuajo = styled(Checkbox)`

      border-color:black;
     `

const ImagenGuajo = styled.img`
       width:64px;
       height:64px;
     `

const GridP = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');   
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #0D0D0D;
    `

const GridPP = styled.p`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap');
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #FA4A0C;
    `
const ContenedorGuajo = styled.div`
       margin:10px;
       display:flex;
       flex-wrap: wrap;
`
const TituloGuajo = styled.h1`
       font-family: Inter;
       font-style: normal;
       font-weight: 600;
       font-size: 20px;
       line-height: 24px;
       color: #0D0D0D;
       margin-bottom:8px;
`
const ContenedorDescripcion = styled.div`
      margin-bottom:10px;
      width:100%;
`
const Descripcion = styled.p`
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 138.84%;
      letter-spacing: 0.02em;
      color: #0D0D0D;
      opacity: 0.5;
      `
const Carga = styled(Spinner)`
      display:block;
      margin-left:auto;
      margin-right:auto;
      `


export default class Guajolocombo extends Component {

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
            .get("http://localhost:3004/bebidas")
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
            <ContenedorGuajo>
                <ContenedorDescripcion>
                    <TituloGuajo>Guajolocombo</TituloGuajo>
                    <Descripcion>Selecciona la bebida que más te guste y disfruta de tu desayuno.</Descripcion>
                </ContenedorDescripcion>

                {
                    this.state.data.map(bebidas => {
                        return (
                            <div>
                                <CajaGuajo
                                    templateRows="repeat(2)"
                                    templateColumns="repeat(5)">
                                    <GridImg colSpan={2}><ImagenGuajo src={bebidas.imagen} alt={bebidas.nombre} border="0" /> </GridImg>
                                    <GridCheck colSpan={2}  ><CheckGuajo value="naruto" colorScheme="green" name="guajolocombo"></CheckGuajo></GridCheck>
                                    <GridText colSpan={4} ><GridP>{bebidas.nombre}</GridP> <GridPP>+ ${bebidas.precio} MSX</GridPP></GridText>
                                </CajaGuajo>
                            </div>
                        )
                    })
                }



            </ContenedorGuajo>
        )
    }
}
