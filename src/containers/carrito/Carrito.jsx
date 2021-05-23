import React, { Component } from 'react'
import axios from 'axios'
import HeaderCarrito from '../../components/carrito/HeaderCarrito'
import CarritoOpacityA from '../../components/carrito/CarritoOpacityA'
import CarritoOpacityM from '../../components/carrito/CarritoOpacityM'

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
                return <h1>Se a cargado</h1>
        }

        if (this.state.error) {
            return <h1>No se ha podido cargar la pagina</h1>
        }
        
        return (
            <div style={{fontFamily: 'Inter', marginBottom: '130px'}}>
                <HeaderCarrito />
                {
                    (this.state.data.length < 1)
                    ? 
                    <>
                        <CarritoOpacityM />
                    </>
                    :
                    <>
                        <CarritoOpacityA section="cart" categories={this.state.data} />
                    </>
                }

            </div>
        )
    }
}

export default Carrito
