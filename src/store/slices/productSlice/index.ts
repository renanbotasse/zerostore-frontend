import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './model';

const initialState: ProductState = {
    product_reference: 0,
    product_name: '',
    product_description: '',
    product_price: 0,
    product_quantity: 0,
    product_platform: '',
    product_type: '',
    product_img: [],
    product_video: '',
    product_status: ''
};

const setProductSlice = createSlice({
    name: 'productRedux',
    initialState,
    reducers: {
        productRedux: (state, action: PayloadAction<Partial<ProductState>>) => {
            const {
                product_reference,
                product_name,
                product_description,
                product_price,
                product_quantity,
                product_platform,
                product_type,
                product_img,
                product_video,
                product_status,
            } = action.payload;

            state.product_reference = product_reference ?? state.product_reference;
            state.product_name = product_name ?? state.product_name;
            state.product_description = product_description ?? state.product_description;
            state.product_price = product_price ?? state.product_price;
            state.product_quantity = product_quantity ?? state.product_quantity;
            state.product_platform = product_platform ?? state.product_platform;
            state.product_type = product_type ?? state.product_type;
            state.product_img = product_img ?? state.product_img;
            state.product_video = product_video ?? state.product_video;
            state.product_status = product_status ?? state.product_status;

            console.log(`Product State Updated: 
            Reference: ${state.product_reference} | 
            Name: ${state.product_name} |
            Description: ${state.product_description} |
            Price: ${state.product_price} |
            Quantity: ${state.product_quantity} |
            Platform: ${state.product_platform} |
            Type: ${state.product_type} |
            Video: ${state.product_video} |
            Status: ${state.product_status} |
            Img: ${state.product_img.join(', ')}`);
        }
    }
});

export const { productRedux } = setProductSlice.actions;
export default setProductSlice.reducer;
