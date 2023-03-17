import { createSlice } from '@reduxjs/toolkit';

const filterState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
