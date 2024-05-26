import { combineReducers } from "@reduxjs/toolkit";
import  setFilterSlice  from './slices/filtersSlice/index'
import { FilterState } from './slices/filtersSlice/model';

export interface rootState {
    filterRedux: FilterState;
}

const rootReducer = combineReducers({
    filterRedux: setFilterSlice
});

export default rootReducer; 