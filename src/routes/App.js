import React from "react"
import Carrito from "../containers/Carrito"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <ChakraProvider>
            <Route path="/cart" component={Carrito} />
          </ChakraProvider>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
