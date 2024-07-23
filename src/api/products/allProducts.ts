import axios from 'axios';

export const allProductsRequest = async () => {
    try {
        const { data  }= await axios.get('http://51.20.53.161:3000/products');
        return data;
    } catch (error) {
        return
    }
}