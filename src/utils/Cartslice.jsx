import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "cart",
    initialState: {
        itams: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.itams.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.itams.pop(action.payload);
        },
        clearCart: (state, action) => {
            state.itams = [];
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = Cartslice.actions;
export default Cartslice.reducer;