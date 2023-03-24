import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 3,
}

export const productSlice = createSlice({ 
    name: 'product',
    initialState,
    reducers: {
        addOne: (state, action) => {
            state.quantity += 1;
        },
        removeOne: (state, action) => {
            if(state.quantity > 0){
                state.quantity -= 1;
            } 
        },
        removeAll: (state, action) => {
            state.quantity = 0;
        }
    }
})

export const { addOne, removeOne, removeAll } = productSlice.actions;
export default productSlice.reducer;