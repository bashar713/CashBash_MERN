import { configureStore } from '@reduxjs/toolkit';
import userReducers from './Slices/userSlices';
import expenseReducers from './Slices/expenseSlices';
import incomeReducers from "./Slices/incomeSlices";
export const store = configureStore({
  reducer: {
    users : userReducers,
    expense : expenseReducers,
    income : incomeReducers
  },
});
