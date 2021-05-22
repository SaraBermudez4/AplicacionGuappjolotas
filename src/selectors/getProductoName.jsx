import axios from "axios";

//import { heroes } from '../data/heroes';
// const guajaProducts = axios.get(`http://localhost:3004/guajolotas`)
// const bebiProducts = axios.get(`http://localhost:3004/Bebidas`)
// const tamaProducts = axios.get(`http://localhost:3004/Tamales`)
let datos = []
const getHeroesByName = (palabra = '') => {
    palabra = 'verde'
    console.log(palabra);
    axios
        .get(`http://localhost:3004/guajolotas`)
        .then(res => {
            datos = res.data
            console.log(datos);
            if (palabra === '') {
                return [];
            }
            
            palabra = palabra.toLocaleLowerCase();
            return (
                console.log(datos.filter(p => p.nombre.toLocaleLowerCase().includes(palabra))));
               
        })
}

export default getHeroesByName