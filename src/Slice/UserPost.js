import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../Components/Interceptors/Interceptors";

export const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialState = {
  data: [],
  status: statuses.IDLE,
};
const userPost = createSlice({
  name: "userPost",
  initialState,
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const fetchUserPhoto = createAsyncThunk(
  "api/fetchUserPhoto",
  async (userId, { dispatch }) => {
    try {
      dispatch(setStatus(statuses.LOADING));
      const res = await instance.get(`/followingUsers/${userId}`); // Pass userId as a parameter
      dispatch(setUser(res.data));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  }
);
export const fetchAllPhoto = createAsyncThunk(
  "api/fetchAllPhoto",
  async (_, { dispatch }) => {
    try {
      dispatch(setStatus(statuses.LOADING));
      const res = await instance.get(`/fetchAllPhoto`); // Pass userId as a parameter
      dispatch(setUser(res.data));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  }
);
export const { setUser, setStatus } = userPost.actions;
export default userPost.reducer;
