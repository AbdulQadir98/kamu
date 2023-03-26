import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        count: 0,
        name: 'CurrentCart',
    },
    reducers: {
        // Actions
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
            state.count = state.count + 1;
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

            state.count = state.count - 1;
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0;
        },
        increase: (state, { payload }) => {
            const cartItem = state.items.find((item) => item.id === payload.id);
            cartItem.unit = cartItem.unit + 1;
            state.count = state.count + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.items.find((item) => item.id === payload.id);
            cartItem.unit = cartItem.unit - 1;
            state.count = state.count - 1;
            if (cartItem.unit === 0) {
                state.items = state.items.filter((item) => item.id !== payload.id);
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload.id;
            state.items = state.items.filter((item) => item.id !== itemId);
            state.count = state.count - action.payload.unit;
        },
        changeCartName: (state, action) => {
            state.name = action.payload;
        },
    }
});

export const { addToCart, removeFromCart, clearCart, increase, decrease, removeItem, changeCartName } = cartSlice.actions; 

// Selectors - This is how we pull information from the global store slice
export const selectItems = state => state.cart.items;
export const selectTotal = state => state.cart.items.reduce((total, item) => total + item.unit * item.price, 0);
export const selectCount = state => state.cart.count;
export const selectName = state => state.cart.name;

export default cartSlice.reducer;