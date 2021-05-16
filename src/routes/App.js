import React from "react"
import Carrito from "../containers/Carrito"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import Inicio from "../components/Inicio";
//import Home from '../containers/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Carrito} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
