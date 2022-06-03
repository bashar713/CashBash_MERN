import {createAsyncThunk,createSlice,createAction} from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../utils/baseURL";


//Redirect action
const resetIncCreated = createAction("income/created/reset");
const resetIncomeUpdated = createAction("income/updated/reset");
const resetIncomeDeleted = createAction("income/deleted/reset");

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
            //dispatch
            dispatch(resetIncCreated());
            return data;
        } catch (error) {
            if(!error?.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


//Fetch All Action
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


export const deleteIncAction = createAsyncThunk(
  "income/delete",
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
        `${baseUrl}/income/${id}`,
        config
      );
      //dispatch
      dispatch(resetIncomeDeleted());
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

        //Handle Delete Action Methods
        [deleteIncAction.pending] : (state,action)=>{
            state.userLoading = true;
            state.userAppErr = undefined;
            state.isDeleted = false;
            state.userServerErr = undefined;
        },
        [deleteIncAction.fulfilled] : (state, action)=>{
            state.userLoading = false;
            state.isDeleted = true;
            state.incomeDeleted = action?.payload;
            state.userAppErr = undefined;
            state.userServerErr = undefined;
        },
        [deleteIncAction.rejected]: (state, action)=>{
            state.userLoading = false;
            
            state.userAppErr = action?.payload?.msg;
            state.userServerErr = action?.error?.msg;
        },
    }
});

export default incomeSlices.reducer;