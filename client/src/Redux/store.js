import { configureStore } from '@reduxjs/toolkit';
import userReducers from './Slices/userSlices';
import expenseReducers from './Slices/expenseSlices';
import incomeReducers from "./Slices/incomeSlices";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducers)


export const store = configureStore({
  reducer: {
    users : persistedReducer,
    expense : expenseReducers,
    income : incomeReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const Persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {
//     users : userReducers,
//     expense : expenseReducers,
//     income : incomeReducers
//   },
// });