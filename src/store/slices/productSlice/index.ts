import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './model';


const initialState: ProductState = {
    _id: '',
    product_id: 0,
    product_name: '',
    product_description: '',
    product_price: 0,
    product_available: 0,
    product_platform: '',
    product_type: '',
    product_img: [],
    product_new: false,
    product_sales: false,
    __v: 0,
    product_video: '',
};

const setProductSlice = createSlice({
    name: 'productRedux',
    initialState,
    reducers: {
        productRedux: (state, action: PayloadAction<Partial<ProductState>>) => {
            const {
                _id,
                product_id,
                product_name,
                product_description,
                product_price,
                product_available,
                product_platform,
                product_type,
                product_img,
                product_new,
                product_sales,
                __v,
                product_video
            } = action.payload;

            state._id = _id ?? state._id;
            state.product_id = product_id ?? state.product_id;
            state.product_name = product_name ?? state.product_name;
            state.product_description = product_description ?? state.product_description;
            state.product_price = product_price ?? state.product_price;
            state.product_available = product_available ?? state.product_available;
            state.product_platform = product_platform ?? state.product_platform;
            state.product_type = product_type ?? state.product_type;
            state.product_img = product_img ?? state.product_img;
            state.product_new = product_new ?? state.product_new;
            state.product_sales = product_sales ?? state.product_sales;
            state.__v = __v ?? state.__v;
            state.product_video = product_video ?? state.product_video;

            console.log(`Product State Updated: 
            ID: ${state._id} | 
            Name: ${state.product_name} |
            Platform: ${state.product_platform} |
            Type: ${state.product_type} |
            New: ${state.product_new} |
            Sales: ${state.product_sales} |
            __v: ${state.__v} |
            Video: ${state.product_video} |
            Img: ${state.product_img.join(', ')}`);
        }
    }
});

export const { productRedux } = setProductSlice.actions;

export default setProductSlice.reducer;
