import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import getProductoName from "../../selectors/getProductoName.jsx";
import useForm from '../../hooks/useForm.jsx';
const Search = ({history}) => {

    const location = useLocation();

    const { palabra = "" } = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: palabra
    })

    const {searchText} = formValues

    const productoFilter = useMemo(() => getProductoName(palabra), [palabra])

    const handleSearch = (e) => {
        e.preventDefault()

        history.push(`?palabra=${palabra}`)
        { console.log(productoFilter) }
    }
    return (
        <div>
            {console.log(productoFilter)}
        </div>
    )
}

export default Search
