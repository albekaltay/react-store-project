import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductAsync = createAsyncThunk('products/getProduct', async () =>  {
    const response = await axios('https://fakestoreapi.com/products');
    return response.data;
} );

export const getSingleProductAsync = createAsyncThunk('products/getSingleProduct', async (id) =>  {
    const response = await axios(`https://fakestoreapi.com/products/${id}`);
    return response.data;
} );

const initialState = 
    { 
        items: [] ,
        singleProduct: {},
        getProductIsLoading: false
    }


const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getProductAsync.pending]: (state) => { 
            state.getProductIsLoading = true; 
        },
        [getProductAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.getProductIsLoading = false; 

        },
        [getSingleProductAsync.fulfilled]: (state, action) => {
            const id = action.payload.id;
        
            const filteredProduct = state.items.filter(product => product.id === id);
            console.log(filteredProduct);
            
    
             state.singleProduct = filteredProduct[0];
        }
    }  });

    export default productsSlice.reducer;