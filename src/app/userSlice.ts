import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginPayload, userAPI } from './backend';

const initialState = {
  user: undefined,
  token: undefined,
};

export const login = createAsyncThunk(
  'user/login',
  async (payload: LoginPayload, thunkAPI) => {
    const res = await userAPI.login(payload);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
      localStorage.removeItem('accessToken');
    },
  },
  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.token = action.payload.token;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
