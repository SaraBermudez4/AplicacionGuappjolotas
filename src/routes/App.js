import React, { useState, useEffect } from 'react';
// Elementos de enrutamiento 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';


function App() {

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
        //     </ChakraProvider>
        //   </Switch>
        // </BrowserRouter> */}
      }
    </React.Fragment>
  );
}

export default App;
