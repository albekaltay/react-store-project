import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productsSlice";
import usersSlice from "./slices/usersSlice";



export const store = configureStore({ 
    reducer:  {
        products: productSlice,
        users: usersSlice,
        carts: cartSlice
    }

});