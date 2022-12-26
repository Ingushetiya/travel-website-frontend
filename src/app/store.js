import { configureStore } from "@reduxjs/toolkit";
import tourSlice from "./features/tourSlice";
//store
import userDataSlice from "./features/userDataSlice";
import organizationSlice from "./features/organization.slice";
import applicationSlice from "./features/authSlice";
import hotelSlice from "./features/hotelSlice";

export const store = configureStore({
    //store
    
  reducer: {
    userData: userDataSlice,
    reducer: organizationSlice,
    authSlice: applicationSlice,
    tours: tourSlice,
    hotel: hotelSlice,
  },
});
