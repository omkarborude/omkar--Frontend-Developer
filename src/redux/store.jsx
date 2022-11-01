import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import spacexReducer from "./reducer/rockets/rocketsSlice";

export const store = configureStore({
    reducer: {
        spacex: spacexReducer
    }
})