import React from 'react';
// import ReactDOM from 'react-dom';
// import { Col, Container, Navbar, Row, Dropdown, Card, Button, Image } from 'react-bootstrap';
import Login from '../containers/Login.jsx'
// Elementos de enrutamiento 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* Aca se ponen las rutas */}
        <Switch>
          <ChakraProvider>
            <Route path='/' component={Login} />
          </ChakraProvider>
        </Switch>
      </BrowserRouter>
      {/* <Login/> */}
    </React.Fragment>
  );
}

export default App;
