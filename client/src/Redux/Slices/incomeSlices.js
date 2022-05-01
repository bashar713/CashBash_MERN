import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";

//Create Action
export const createIncAction = createAsyncThunk(
    "income/create",
    async (payload,{rejectWithValue,getState,dispatch})=>{

        //get user token from store
        const userToken = getState()?.users?.userAuth?.token;

        //Send Data as JSON format
        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }
        try {
            const {data} = await axios.post(
                `${baseUrl}/income`,
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


//Create Action
export const fetchAllIncAction = createAsyncThunk(
    "income/fetchAll",
    async (payload,{rejectWithValue,getState,dispatch})=>{

        //get user token from store
        const userToken = getState()?.users?.userAuth?.token;

        //Send Data as JSON format
        const config ={
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            }
        }
        try {
            const {data} = await axios.get(
                `${baseUrl}/income`,
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

//Slices
const incomeSlices = createSlice({
    name : "income",
    initialState:{},
    extraReducers : {


        //Handle Create Action Methods
        [createIncAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.isCreated = false;
        },
        [createIncAction.fulfilled] : (state, action)=>{
            state.income = action?.payload;
            state.userLoading = false;
            state.isCreated = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [createIncAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },

        //Handle Fetch All Action Methods
        [fetchAllIncAction.pending] : (state,action)=>{
            state.userLoading = true;
        },
        [fetchAllIncAction.fulfilled] : (state, action)=>{
            state.incomeList = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
            state.isCreated = false;
        },
        [fetchAllIncAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },
    }
});

export default incomeSlices.reducer;