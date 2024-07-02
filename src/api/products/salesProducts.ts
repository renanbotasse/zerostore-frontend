import axios from 'axios';

export const salesProductsRequest = async () => {
    try {
        const { data  }= await axios.get('http://localhost:3000/products/status/sales');
        return data;
    } catch (error) {
        return
    }
}