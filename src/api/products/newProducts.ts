import axios from 'axios';

export const newProductsRequest = async () => {
    try {
        const { data  }= await axios.get('http://51.20.53.161:3000/products/status/new');
        return data;
    } catch (error) {
        return
    }
}