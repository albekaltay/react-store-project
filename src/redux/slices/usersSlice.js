import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsersAsync = createAsyncThunk('users/getUsers', async () =>  {
    const response = await axios('https://fakestoreapi.com/users');
  
    return response.data;
} );


export const userLoginAsync = createAsyncThunk('users/userLogin', async ({username,password},error) =>  {
    const response = await axios.post("https://fakestoreapi.com/auth/login",{username,password},error)
  
    return response.data;
} );


    const initialState = {

        items: [],
        token: "",
        isSuccess: false,
        activeUser: {name:{firstname:"",lastname:""}},
        error: null
      
    
    }
    
  



export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        logOut: (state) => {
            state.token = "";
            localStorage.removeItem("token");
            state.isSuccess = false;
            state.error= null;
          
        },
        getLoginEmailPassword: (state, action) => {
            const username = action.payload.username;
            const password = action.payload.password; 
            const filteredUser = state.items.filter(user => user.username === username && user.password === password);
            state.activeUser = filteredUser;
   
            
            
        
        }
    },
    extraReducers: {
        [getUsersAsync.fulfilled]: (state, action) => {
       
            state.items = action.payload;
            
        },

        [userLoginAsync.fulfilled]: ( state,action) => {
        const token = action.payload.token;
         state.token = token;
         localStorage.setItem("token", token);
        state.isSuccess = true;
     
      
        },
        [userLoginAsync.rejected]: (state) => {

            state.isSuccess = false;
            state.error = "Username or password is incorrect!";
        }
        
}});


export const { logOut,getLoginEmailPassword } = usersSlice.actions;

export default usersSlice.reducer;