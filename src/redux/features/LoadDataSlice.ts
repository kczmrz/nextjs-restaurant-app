import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IProducts } from "@/mongodb/models/product";
import { IExtras } from "@/mongodb/models/extras";
import { URL } from "@/Config";
import { JSONOfflineDATA } from "@/GHPagesJson";
import axios from "axios";

interface FetchingData {
    loading: boolean;
    products: IProducts[];
    extras: IExtras[];
}

interface FetchedData {
    data1: any;
    data2: any;
}

/* Create Async Thunk from /api/ (mongodb) */
export const fetchData = createAsyncThunk<FetchedData, void>('products/products', async()=> {
    const data1 = JSONOfflineDATA.products;
    const data2 = JSONOfflineDATA.extras;

    return {
        data1: data1,
        data2: data2
    }
});

const initialState: FetchingData = {
    loading: false,
    products:[],
    extras: []
}

/* In this script, app will be fetch data from MongoDB to Redux */
/* Why? Because app will be faster! */
  
export const Data = createSlice({
    name: "Data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state)=>{
            state.loading = true
            /* When our data is still loading ^^ */
        }),
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false,
            state.products = action.payload.data1
            state.extras = action.payload.data2
            /* When data is load and array has been pushed */
        }),
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false,
            state.products = [],
            state.extras = [],
            console.log('error')
            /* When has been error :-( */
        })
    }  
         
});


export default Data.reducer;

