import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './model';

const initialState: FilterState = {
    product_platform: null,
    product_type: null,
    product_new: null,
    product_sales: null
}

const setFilterSlice = createSlice({
    name: 'filterRedux',
    initialState,
    reducers: {
        filterRedux: (state, action: PayloadAction<Partial<FilterState>>) => {
            const { product_platform, product_type, product_new, product_sales } = action.payload;
            state.product_platform = product_platform ?? state.product_platform;
            state.product_type = product_type ?? state.product_type;
            state.product_new = product_new ?? state.product_new;
            state.product_sales = product_sales ?? state.product_sales;
            console.log(`Filter Redux: NEW ${state.product_new} | 
                                    PLATFORM ${state.product_platform} |
                                    TYPE ${state.product_type} |
                                    SALES ${state.product_sales}`)
        }
    }
});

export const { filterRedux } = setFilterSlice.actions;

export default setFilterSlice.reducer;
