import {createAsyncThunk,createSlice,createAction} from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";


//Redirect action
export const resetExpCreated = createAction("expense/created/reset");
export const resetExpUpdated = createAction("expense/updated/reset");
export const resetExpDeleted = createAction("expense/deleted/reset");


//Create Action
export const createExpAction = createAsyncThunk(
    "expense/create",
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
                `${baseUrl}/expense`,
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
export const fetchAllExpAction = createAsyncThunk(
    "expense/fetchAll",
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
                `${baseUrl}/expense`,
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


export const deleteExpAction = createAsyncThunk(
  "expense/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call
    try {
      const { data } = await axios.delete(
        `${baseUrl}/expense/${id}`,
        config
      );
      //dispatch
    //   dispatch(resetExpDeleted());
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);





//Slices
const expenseSlices = createSlice({
    name : "expense",
    initialState:{},
    extraReducers : {


        //Handle Create Action Methods
        [createExpAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.isCreated = false;
        },
        [createExpAction.fulfilled] : (state, action)=>{
            state.expense = action?.payload;
            state.userLoading = false;
            state.isCreated = true;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [createExpAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },

        //Handle Fetch All Action Methods
        [fetchAllExpAction.pending] : (state,action)=>{
            state.userLoading = true;
        },
        [fetchAllExpAction.fulfilled] : (state, action)=>{
            state.expensesList = action?.payload;
            state.userLoading = false;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
            state.isCreated = false;
        },
        [fetchAllExpAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },


        //Handle Delete Action Methods
        [deleteExpAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.isDeleted = false;
            state.userServerErr = undefined;
        },
        [deleteExpAction.fulfilled] : (state, action)=>{
            state.userLoading = false;
            state.isDeleted = true;
            state.expenseDeleted = action?.payload;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [deleteExpAction.rejected]: (state, action)=>{
            state.userLoading = false;
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },
    }
});

export default expenseSlices.reducer;