import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

//<Route path="/:section/:id" component={detalleProducto} />
export default App;
