import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    Reducer:{
        counter:counterReducer
    }
});

export default store;