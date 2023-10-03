import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],
  cart: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuanity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuanity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

//This is redux selector function. These function start with get keyword .
//These might cause a performance issue we can also use reselect library to optimize these types of function.
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
