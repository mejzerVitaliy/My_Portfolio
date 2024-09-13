import { combineReducers } from "@reduxjs/toolkit";
import OpenModalSlice from "./OpenModalSlice";

const rootReducers = combineReducers({
    name: OpenModalSlice
})

export default rootReducers