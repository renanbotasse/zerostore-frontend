import axios from 'axios';

export const searchProductsRequest = async (name) => {
    try {
        const { data }= await axios.get(`http://localhost:3000/products/search?product_name=${name}`);
        return data;
    } catch (error) {
        return
    }
}