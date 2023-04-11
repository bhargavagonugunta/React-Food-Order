
import { configureStore } from '@reduxjs/toolkit';
import Cart from '../Components/Cart';
import Cartslice from './Cartslice';
import { createSlice } from '@reduxjs/toolkit';
const store = configureStore({
    reducer:{
        cart:Cartslice
    }
})

export default store;