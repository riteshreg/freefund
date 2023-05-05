import { configureStore } from "@reduxjs/toolkit";
import CreateDonationSlice from "./CreateDonationSlice";


const store = configureStore({
    reducer:{
        'createDonation': CreateDonationSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

