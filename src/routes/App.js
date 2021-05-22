import React, { useState, useEffect } from 'react';
// Elementos de enrutamiento 
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import UserCheck from '../components/login/UserCheck.jsx'
import Entrada from '../components/login/Entrada.jsx';
import Home from '../components/home/Home'
import LoginR from '../components/LoginR';
import Search from '../components/search/Search.jsx';

function App() {

  const loggedIn = localStorage.getItem("logueado")
  console.log(loggedIn);
  // const isAutenticated = () => {
  //   return localStorage.getItem("logueado")
  // }
  // const MyRoute = (props) => {
  //   isAutenticated()
  //   ?<Route {...props}/>
  //   :<Redirect to = "/login"/>
    
  // }

  // const Login = () => {
  //   return (
  //     <Route exact path="/">
  //       <Redirect to="/home" />
  //     </Route>)
  // }

  // const Logout = () => {
  //   localStorage.removeItem("logueado")
  //   return (
  //     <Route exact path="/logout">
  //       <Redirect to="/login" />
  //     </Route>)
  // }
  return (
    <BrowserRouter>
      <Switch>
        <ChakraProvider>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <LoginR />}
          </Route>
          
          {/* <Route exact path='/' component={LoginR} /> */}
          {/* <Route exact path='/login' component={Login} /> */}
          <Route exact path='/search' component={Search} />
          {/* <Route exact path="/logout" component={Logout} /> */}
          <Route exact path="/home" component={Home} />
        </ChakraProvider>
      </Switch>
    </BrowserRouter>

  );
}
//<Route  path="/" component={Home} <Route exact path='/login' component={LoginR} />/>
export default App;
