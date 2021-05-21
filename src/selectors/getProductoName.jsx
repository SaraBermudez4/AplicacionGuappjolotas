import axios from "axios";

//import { heroes } from '../data/heroes';
const guajaProducts = axios.get(`http://localhost:3004/Guajolotas`)
const bebiProducts = axios.get(`http://localhost:3004/Bebidas`)
const tamaProducts = axios.get(`http://localhost:3004/Tamales`)
const getHeroesByName = (name = '') => {

    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return guajaProducts.filter(p => p.nombre.toLocaleLowerCase().includes(name));

}

export default getHeroesByName