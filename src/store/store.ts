import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

// Crie a loja Redux com o rootReducer
const store = configureStore({
    reducer: rootReducer,
});

// Exporte o tipo de dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
