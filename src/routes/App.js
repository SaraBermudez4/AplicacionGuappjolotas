import React, { useState, useEffect } from "react"
import Carrito from "../containers/Carrito"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import Inicio from "../components/Inicio"
//import Home from '../containers/Home'

function App() {

  // const [aplica, setaplica] = useState(null)
  const [loading, setloading] = useState(true)

  // const aplicaFunction = async () => {
  //   try {
  //     const data = await axios
  //     .get(`http://localhost:3004/cart`)
  //     .then(res => {
  //       console.log(res)
  //       setaplica(res.data.aplica)
  //     })
  //     setloading(true)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 4000)
  }, [])

  return (
    <React.Fragment>
      {
        loading ?
          <Inicio />
        :
          <BrowserRouter>
            <Switch>
              <ChakraProvider>
                <Route path="/cart" component={Carrito} />
              </ChakraProvider>
            </Switch>
          </BrowserRouter>
      }
    </React.Fragment>
  );
}

export default App;
