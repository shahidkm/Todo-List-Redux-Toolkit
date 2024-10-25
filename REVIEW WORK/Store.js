import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./CreateSlice"
export let Store=configureStore({
    reducer:{
        Todo:Reducer
    }
})