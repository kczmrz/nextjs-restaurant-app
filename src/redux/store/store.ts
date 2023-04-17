import { configureStore } from "@reduxjs/toolkit";
import Cart from "../features/cartSlice";
import Data  from "../features/LoadDataSlice";
export const store = configureStore({
    reducer: {
        Cart: Cart,
        Data: Data,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;