import React from 'react'
import styled from 'styled-components'
import { Row, Image } from 'react-bootstrap'

const RowBoots = styled(Row)`
    text-align: center;
    width: 100%;
`

const ArrowVector = styled(Image)`
    width: 24px;
    height: 24px;
    float: left;
`

const TextMenu = styled.h3`
    font-family: 'Times New Roman';
`

const Header = () => {
    return (
        <>
            <RowBoots>
                <ArrowVector src="https://i.ibb.co/XCfZxLf/vector-chevron-leftx4.png" alt="Vector Arrow" />
                <TextMenu>Carrito</TextMenu>
            </RowBoots>
        </>
    )
}

export default Header
