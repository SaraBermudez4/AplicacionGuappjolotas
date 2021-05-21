import React, { Component } from 'react'
import CategoriaProductos from '../components/CategoriaProductos';
import Header from '../components/Header';
import styled from 'styled-components'
import axios from 'axios'
import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

localStorage.setItem('productCategorie', "Guajolotas")

const StyledHome = styled.header`
    padding: 24px 24px 24px 24px;
    background-color: #F2F2F2;
`

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorie: localStorage.getItem('productCategorie'),
            loading: true,
            error: "",
            data: "",
            dataCategorie: []
        }
    }

    fetchProductosData = () => {
        this.setState({
            loading: true,
            error: null
        })

        axios
            .get(`http://localhost:3004/${this.state.categorie}`)
            .then(res => {
                this.setState({
                    loading: false,
                    data: res.data
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                })
            })
    }
    fetchProductosDataCategorie = () => {

        axios
            .get("http://localhost:3004/categorias")
            .then(res => {
                this.setState({
                    loading: false,
                    dataCategorie: res.data
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                })
            })
    }
    
    componentDidMount() {
        this.fetchProductosData()
        this.fetchProductosDataCategorie()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.categorie !== this.state.categorie) {
            this.fetchProductosData()
        }

    }

    handleClickSelection = (e, section) => {
        e.preventDefault()
        this.setState({
            categorie: section
        })
    }

    render() {

        if (this.state.loading && !this.state.data) {
            return (
                <Center>
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="orange.400"
                        size="xl"
                        marginTop="100%" />
                </Center>
            )
        }
        if (this.state.error) {
            return <h1>Vaya vaya, en mi pc si funcionaba</h1>
        }

        return (
            <StyledHome>
                <Header />
                <CategoriaProductos section={this.state.categorie} productos={this.state.data} categorias={this.state.dataCategorie} onClick={this.handleClickSelection} />
            </StyledHome>
        )
    }
}

export default Home