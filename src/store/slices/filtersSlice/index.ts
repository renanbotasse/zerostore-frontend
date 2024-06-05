import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './model';

const initialState: FilterState = {
    product_platform: null,
    product_type: null,
    product_status: null,
}

const setFilterSlice = createSlice({
    name: 'filterRedux',
    initialState,
    reducers: {
        filterRedux: (state, action: PayloadAction<Partial<FilterState>>) => {
            const { product_platform, product_type, product_status } = action.payload;
            state.product_platform = product_platform ?? state.product_platform;
            state.product_type = product_type ?? state.product_type;
            state.product_status = product_status ?? state.product_status;
            console.log(`Filter Redux:
                                    TYPE ${state.product_type} | 
                                    PLATFORM ${state.product_platform} |
                                    STATUS ${state.product_status}`)
        }
    }
});

export const { filterRedux } = setFilterSlice.actions;

export default setFilterSlice.reducer;
