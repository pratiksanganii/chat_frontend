import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginPayload, userAPI } from './backend';

const initialState = {
  user: undefined,
  token: localStorage.getItem('accessToken') ?? undefined,
};

export const login = createAsyncThunk(
  'user/login',
  async (payload: LoginPayload, thunkAPI) => {
    try {
      const res = await userAPI.login(payload);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
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
      state.user = action.payload.payload;
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {});
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
