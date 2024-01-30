import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  sub_title: '',
  show: false,
};
export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    showError: (state, action) => {
      state.show = true;
      state.title = action.payload.title;
      state.sub_title = action.payload.sub_title;
    },
    resetError: (state) => {
      state.show = false;
      state.title = '';
      state.sub_title = '';
    },
  },
});
export const { showError, resetError } = errorSlice.actions;
export default errorSlice.reducer;
