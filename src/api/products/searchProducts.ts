import axios from 'axios';

export const searchProductsRequest = async (name) => {
    try {
        const { data }= await axios.get(`http://51.20.53.161:3000/products/search?product_name=${name}`);
        return data;
    } catch (error) {
        return
    }
}