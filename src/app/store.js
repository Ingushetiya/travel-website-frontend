import { configureStore } from "@reduxjs/toolkit"
//store
import userDataSlice from "./features/userDataSlice"
export const store = configureStore({
    reducer:{
        userData: userDataSlice
    }
})