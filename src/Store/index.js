import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import { saveState, loadState } from "../Tools/Helper"

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState, 
});

// Subscribe to store updates to save state to localStorage
store.subscribe(() => {
  saveState({
    cart: store.getState().cart, // Save only the cart state
  });
});

export default store;
