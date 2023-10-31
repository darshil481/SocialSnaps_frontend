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
const storyData = createSlice({
  name: "storyList",
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
export const fetchStory = createAsyncThunk(
  "api/fetchUserStory",
  async (userIds, { dispatch }) => {
    try {
      dispatch(setStatus(statuses.LOADING));
      const res = await instance.get(`/findStoryByUserIds/${userIds}`);
      dispatch(setUser(res.data));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  }
);
export const { setUser, setStatus } = storyData.actions;
export default storyData.reducer;
