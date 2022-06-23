import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tablesReducer from './slices/tablesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tables: tablesReducer,
  },
});
