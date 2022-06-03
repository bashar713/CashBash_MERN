import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";
import {useNavigate} from "react-router-dom";

//Login Action
export const loginUserAction = createAsyncThunk(
    "login/user",
    async (payload,{rejectWithValue,getState,dispatch})=>{
        //Send Data as JSON format
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(
                `${baseUrl}/users/login`,
                payload,
                config
            );
            //Save user into localStorage 
            window.localStorage.setItem("userData" , JSON.stringify(data));
            //Return the data 
            return data;
        } catch (error) {
            if(!error?.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//Register Action
export const registerUserAction = createAsyncThunk(
    "register/user",
    async (payload,{rejectWithValue,getState,dispatch})=>{
        
        //Send Data as JSON format
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(
                `${baseUrl}/users/register`,
                payload,
                config
            );
            
            return data;
        } catch (error) {
            if(!error?.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//Logout Action
export const logOutUserAction = createAsyncThunk(
    "logout/user",
    async (payload,{rejectWithValue,getState,dispatch})=>{
        try {
            
            window.localStorage.removeItem('userData');
            
        } catch (error) {
            if(!error?.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);

//Get the user info from localStorage
const getUserFromLocalStorage = window.localStorage.getItem("userData") ? 
    JSON.parse(window.localStorage.getItem("userData")) : 
    undefined;


//Slices
const userSlices = createSlice({
    name : "users",
    initialState:{
        userAuth : getUserFromLocalStorage
    },
    extraReducers : {
        //Handle Login Action Methods
        [loginUserAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.isLogin = false;
            state.userServerErr = undefined;
        },
        [loginUserAction.fulfilled] : (state, action)=>{
            state.userAuth = action?.payload;
            state.userLoading = false;
            state.isLogin = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [loginUserAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },

        //Handle Register Action Methods
        [registerUserAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.isRegistered = false;
            state.userServerErr = undefined;
        },
        [registerUserAction.fulfilled] : (state, action)=>{
            state.userAuth = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
            state.isRegistered = true;
        },
        [registerUserAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.isRegistered = false;
            state.userServerErr = action?.error?.msg;
        },

        //Handle Logout Action Methods
        [logOutUserAction.pending]: (state, action) => {
            state.userLoading = false;
        },
        [logOutUserAction.fulfilled]: (state, action) => {
            state.userAuth = undefined;
            state.userLoading = false;
            state.isLogin = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [logOutUserAction.rejected]: (state, action) => {
            state.userAppErr = action?.payload?.message;
            state.userServerErr = action?.error?.message;
            state.userLoading = false;
            state.isLogin = false;
        }
    }
});

export default userSlices.reducer;