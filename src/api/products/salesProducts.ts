import axios from 'axios';

export const salesProductsRequest = async () => {
    try {
        const { data  }= await axios.get('http://51.20.53.161:3000/products/status/sales');
        return data;
    } catch (error) {
        return
    }
}