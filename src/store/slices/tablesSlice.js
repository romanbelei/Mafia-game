import { createSlice } from '@reduxjs/toolkit';

const initialState = { tables: [], myTableName: '' };

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    setTables(state, action) {
      state.tables = action.payload;
    },
    setMyTableName(state, action) {
      state.myTableName = action.payload;
    },
  },
});

export const { setTables, setMyTableName } = tablesSlice.actions;

export default tablesSlice.reducer;
