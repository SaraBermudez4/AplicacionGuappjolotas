import React, { useEffect, useState } from 'react'
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';
import { ChakraProvider } from '@chakra-ui/react';

const LoginR = ({history}) => {

    const handleLogin = () =>{
        history.push('/')
    }

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
                // {/* <BrowserRouter>
                //   <Switch>
                //     <ChakraProvider>
                //       <Route path='/' component={Login} />
                //      <Route exact path="/" component={Home} />
                //     </ChakraProvider>
                //   </Switch>
                // </BrowserRouter> */}
            }
        </React.Fragment>
    )
}

export default LoginR
