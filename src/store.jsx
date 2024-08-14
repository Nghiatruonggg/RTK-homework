import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./assets/reducers/cartSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;