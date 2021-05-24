import React, { useEffect, useState } from 'react'
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';
import { ChakraProvider } from '@chakra-ui/react';

const LoginR = ({ history }) => {

    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 4000)
    }, [])
    return (
        <React.Fragment>
            {
                loading ?
                    <Entrada />
                    :
                    <ChakraProvider>
                        <UserCheck />
                    </ChakraProvider>
            }
        </React.Fragment>
    )
}

export default LoginR
