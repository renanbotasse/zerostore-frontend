import axios from 'axios';

export const allProductsRequest = async () => {
    try {
        const { data  }= await axios.get('http://localhost:3000/products');
        return data;
    } catch (error) {
        return
    }
}