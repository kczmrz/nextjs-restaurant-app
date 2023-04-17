import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* Interface for one item */
export interface CartItem {
     id: string;
     title: string;
     size?: number;
     price: number;
}

/*For updating full price */
interface FullPriceUpdates {
    id: string;
    nmbr: number;
}


/*Interface for a full cart */
interface fullCart {
    items: CartItem[];
    totalPrice: number;
    CartIsEmpty: boolean;
}

/* Initial state */
const initialState:fullCart = {
       items: [],
       totalPrice: 0,
       CartIsEmpty: true
}

export const Cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        CheckCart: (state) => {
          if(state.items == null)
           {
             state.CartIsEmpty = true
           }
           else {
            state.CartIsEmpty = false
           }
         },
        AddToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            
            
        },
        DeleteCartElement: (state, action: PayloadAction<string>)=> {
            const index = state.items.map(object => object.id).indexOf(action.payload);
            state.items.splice(index, 1);
        },

        UpdatePrice: (state) => {
            const sumPrice = state.items.reduce((x, object)=> {
                return x + object.price;
            }, 0)

            state.totalPrice = Math.round(sumPrice*100)/100;
        } 
    }
})

export const { AddToCart, DeleteCartElement, CheckCart, UpdatePrice } = Cart.actions;
export default Cart.reducer;