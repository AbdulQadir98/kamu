import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // Actions
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );

            let newcart = [...state.items];
            
            if(index >= 0){
                //  The item index in the cart ... remove it
                newcart.splice(index, 1);
            }else{
                console.warn(`Cant remove product (id : ${action.payload.id}) as its not in the cart`);
            }

            state.items = newcart;
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions; 

// Selectors - This is how we pull information from the global store slice
export const selectItems = state => state.cart.items;
export const selectTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;