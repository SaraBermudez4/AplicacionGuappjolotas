import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search/Search.jsx'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Search/>
  </React.StrictMode>,
  document.getElementById('root')
);

