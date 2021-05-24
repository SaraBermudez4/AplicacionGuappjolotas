import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Home from '../components/home/Home'
import LoginR from '../components/LoginR';
import Search from '../components/search/Search.jsx';
import Descripcion from '../containers/descripcion/Descripcion.jsx';
import Carrito from '../containers/carrito/Carrito.jsx';

function App() {
  const loggedIn = localStorage.getItem("logueado")
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <LoginR />}
          </Route>
          <Route exact path='/search' component={Search} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/:section/:prodId" component={Descripcion} />
          <Route path="/cart" component={Carrito} />
        </ChakraProvider>
      </Switch>
    </BrowserRouter>

  );
}
export default App;
