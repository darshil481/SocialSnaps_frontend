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

export const fetchApiData = createAsyncThunk(
  "api/fetchData",
  async (_, { dispatch }) => {
    try {
      dispatch(setStatus(statuses.LOADING));
      const res = await instance.get("/findUserProfile");
      dispatch(setUser(res.data));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      dispatch(setStatus(statuses.ERROR));
    }
  }
);

const userDetaile = createSlice({
  name: "userDetaile",
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

export const { setUser, setStatus } = userDetaile.actions; // Corrected from productSlice to userDetaile
export default userDetaile.reducer;
