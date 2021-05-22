import React, { useState, useEffect } from 'react';
// Elementos de enrutamiento 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';
import Home from '../components/home/Home.jsx'
import LoginR from '../components/LoginR.jsx';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <Route path='/login' component={LoginR} />
          <Route exact path="/" component={Home} />
        </ChakraProvider>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
