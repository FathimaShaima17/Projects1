import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/Authslice";
import cartReducer from "./slice/Cartslice";
import productReducer from "./slice/Productslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
  },
});
