import React, { useMemo } from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string';
import getProductoName from "../selectors/getProductoName";
const Search = ({history}) => {

    const location  = useLocation;
    const { palabra = ""} = queryString.parse(location.search)

    const productoFilter = useMemo(()=> getProductoName(palabra), [palabra])

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?palabra=${palabra}`)
    }
    return (
        <div>
            {console.log(productoFilter)}
        </div>
    )
}

export default Search
