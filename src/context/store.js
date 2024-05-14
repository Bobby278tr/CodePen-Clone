import { configureStore } from '@reduxjs/toolkit';
import myReducer from './reducers';
const Store = configureStore({
    reducer: myReducer,  
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()})

export default Store