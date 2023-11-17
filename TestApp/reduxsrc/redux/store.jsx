import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './features/user-add/user-slice'

export const store = configureStore({
    reducer:{
        user : UserReducer
    }
})