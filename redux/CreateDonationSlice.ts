import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface PayloadActionTS{
    key:string;
    value:string;
}


const initialState:InitialCreateState = {
    province:"",
    district:"",
    municipality:"",
    ward:"",
    fundFor:"",
    goal:"",
    firstName:"",
    lastName:"",
    password:"",
    mobileNumber:"",
    wardCertificate:"",
    bankcheque:"",
    profilePicture:"",
    thumbnailPicture:"",
    isVerified:false
}

const createDonationSlice = createSlice({
    name:"createDonationSlice",
    initialState,
    reducers:{
        CreateDonationChangeHandler(state, action:PayloadAction<PayloadActionTS>){
            state[action.payload.key] = action.payload.value
        }
    }
})

export const {CreateDonationChangeHandler} = createDonationSlice.actions
export default createDonationSlice.reducer