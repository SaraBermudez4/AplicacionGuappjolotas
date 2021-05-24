import axios from 'axios';

export default axios.create({
  baseURL: `https://api-guajolotas.herokuapp.com/guajolotas/`
});