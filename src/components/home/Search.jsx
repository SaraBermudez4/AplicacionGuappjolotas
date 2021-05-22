import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import getProductoName from "../../selectors/getProductoName.jsx";
import useForm from '../../hooks/useForm.jsx';
import { Form, FormControl, Image, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Productos from './Productos.jsx';
import { Box, Grid, Heading, Text } from '@chakra-ui/layout';


const StyledFormSearch = styled(Form)`
    background: #E7E7E7;
    border-radius: 30px;
    color: #63717f;
    height: 60px;
    width: 100%;
    margin-top: 32px;
`
const StyledIconSearch = styled(Image)`
    font-size: 18px;
    margin-right: 8px;
    margin-left: 28px;
    display: inline-block;
`

const StyledInputSearch = styled(FormControl)`
    background: #E7E7E7;
    color: #65737e;
    border: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 21px;
    color: #9A9A9D;
    margin-top: 10px;
`

//Producto
const StyledBoxProductos = styled(Box)`
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    background :#ffffff;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    width: 100%;
    height: 112px;
`

const StyledImageProducto = styled(Image)`
    width : 80px;
    height : auto;

`

const StyledHeadign = styled(Heading)`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #0D0D0D;
`

const StyledTextPrecio = styled(Text)`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FA4A0C;
`



const Search = ({ history }) => {

    const location = useLocation();

    const { palabra = '' } = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: palabra
    })

    const { searchText } = formValues

    const productoFilter = useMemo(() => getProductoName(palabra), [palabra])

    const handleSearch = (e) => {
        e.preventDefault()

        history.push(`?palabra=${searchText}`)
        console.log(productoFilter)
        console.log(palabra)
    }

    return (
        <div>
            <h1>Buscador</h1>
            <hr />
            <div className="row">
                <hr />
                <StyledFormSearch onSubmit={handleSearch}>
                    <StyledIconSearch src="https://i.ibb.co/ssJCP66/vector-search.png" alt="Icono de busqueda" />
                    <StyledInputSearch
                        type="text"
                        id="search"
                        placeholder="Sabor de guajolota, bebida..."
                        onChange={handleInputChange}
                        className="form-control"
                        autoComplete="off"
                        name="searchText"
                        value={searchText} />
                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary">
                        Search...
                        </button>
                </StyledFormSearch>

            </div>
            <div className="row">

                <h4> Results </h4>
                <hr />

                {
                    (palabra === '')
                    &&
                    <div className="alert alert-info">
                        Producto no encontrado
                            </div>
                }

                {/* {
                    (palabra !== '' && productoFilter.length === 0)
                    &&
                    <div className="alert alert-danger">
                        Ese producto no lo conozco we {palabra}
                    </div>
                } */}

                {
                    // productoFilter.map(p => (
                    // <Productos
                    //     key={p.id}
                    //     {...p}
                    // />


                    // <StyledBoxProductos key={`${productoFilter.id}`}>
                    //     <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    //         <Box w="100%" h="10" marginTop="-10px">
                    //             <StyledImageProducto src={productoFilter.imagen} alt="Guajalota verde" />
                    //         </Box>
                    //         <Box w="100%" h="10" marginLeft="-50px" marginTop="20px">
                    //             <StyledHeadign fontSize="xl">{productoFilter.sabor.nombreSabor}</StyledHeadign>
                    //             <StyledTextPrecio mt={4}>{productoFilter.precio} MX</StyledTextPrecio>
                    //         </Box>
                    //     </Grid>
                    // </StyledBoxProductos>

                    // ))
                }

            </div>

        </div>



    )
}

export default Search
