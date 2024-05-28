import { combineReducers } from "@reduxjs/toolkit";
import  setFilterSlice  from './slices/filtersSlice/index'
import { FilterState } from './slices/filtersSlice/model';
import { ProductState } from './slices/productSlice/model';
import setProductSlice from './slices/productSlice/index';

export interface rootState {
    filterRedux: FilterState;
    productRedux: ProductState
}

const rootReducer = combineReducers({
    filterRedux: setFilterSlice,
    productRedux: setProductSlice
});

export default rootReducer; 