import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import {GET_ROCKET_DATA} from "../../../constant/reduxTypes"
import {GET_ROCKETS_URL} from "../../../constant/urls"
const initialState = {
    rockets: [],
    status: null,
  };

  export const getRocketsData = createAsyncThunk(
    GET_ROCKET_DATA,
    async (offset) => {
      try {
        const { data, status } = await axios.get(GET_ROCKETS_URL,{params:{
          limit:10,
          offset:offset
        }});

        if (status == 200) {
          return data;
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  );

  export const rocketSlice = createSlice({
    name: "counter",
    initialState,
    extraReducers:{
        [getRocketsData.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.rockets = action.payload?.data ? action.payload?.data : action.payload;
          },
          [getRocketsData.rejected]: (state) => {
            state.status = "failed";
          },
          [getRocketsData.pending]: (state) => {
            state.status = "loading";
          },
    }
  });

  export default rocketSlice.reducer;
