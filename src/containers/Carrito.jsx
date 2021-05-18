import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import HeaderCarrito from '../components/HeaderCarrito'
// import FondoCarrito from '../components/FondoCarrito'
import Inicio from '../components/Inicio'
import CategorieCarrito from '../components/CategorieCarrito'

// const NoProductos = styled.div`

// `

const NavFixed = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 101px;
  background-color: #F2F2F2;
  text-align: center;
  opacity: 0.5;
`

const NavButton = styled.button`
    margin-top: 17px;
    width: 312px;
    height: 69px;
    text-align: center;
    border-radius: 40px;
    background-color: #FA4A0C;
    border: none;
    color: #F6F6F9;
`

localStorage.setItem('productsCarrito', "cart")

class Carrito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorie: localStorage.getItem('productCategorie'),
            loading: true,
            error: null,
            data: undefined,
        }
    }


    fetchCarrito = () => {
        this.setState({
            loading: true,
            error: null
        })

        axios
            .get(`http://localhost:3004/cart`)
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data
                })
            })
            .catch( err => {
                this.setState({
                    loading: false,
                    error: err
                })
            })
    }

    componentDidMount() {
        this.fetchCarrito()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.categorie !== this.state.categorie) {
            this.fetchCarrito()
        }
    }

    handleClickSelection =(e, section) => {
        e.preventDefault()
        this.setState({
            categorie: section
        })
    }
    
    render() {
        if (this.state.loading === true && !this.state.data) {
                return <Inicio />
        }

        if (this.state.error) {
            return <h1>No se ha podido cargar la pagina</h1>
        }
        
        return (
            <div style={{fontFamily: 'Inter'}}>
                <HeaderCarrito />
                {/* <FondoCarrito /> */}
                <CategorieCarrito section="cart" categories={this.state.data} />
                <NavFixed>
                    <NavButton>Pagar</NavButton>
                </NavFixed>
            </div>
        )
    }
}

export default Carrito
