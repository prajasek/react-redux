import { configureStore, createStore } from '@reduxjs/toolkit';
import reducers from '../features/counter/counterSlice';

let [reducer, newReducer] = reducers;

const store = configureStore({
    reducer: {
        counter: reducer, 
        newCounter: newReducer
    }
});

export default store;


