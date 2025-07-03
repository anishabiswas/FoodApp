import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//create a store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
