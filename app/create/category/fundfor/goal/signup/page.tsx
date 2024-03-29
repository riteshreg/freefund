'use client'

import Card from "@/libsComponents/Card"
import { useDispatch, useSelector } from "react-redux"
import { CreateDonationChangeHandler } from "@/redux/CreateDonationSlice"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"

export default function Signup() {

    const dispatch = useDispatch()
    const router = useRouter()

    const {firstName, lastName, password, mobileNumber} = useSelector((state:RootState)=>state.createDonation)

    function handleFormChange(event:React.ChangeEvent<HTMLInputElement>){
        dispatch(CreateDonationChangeHandler({key:event.target.name, value:event.target.value}))
    }

    return (
        <div>
            <div className="flex relative  overflow-hidden bg-[#fbf8f6] ">
                <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
                    <h1 className="text-3xl text-gray-700 max-w-[60%] font-semibold">{`Great progress`}</h1>
                    <p className="text-lg text-gray-600 ">{`Create an account to save and continue`}</p>
                </div>
                <div className="relative overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
                    <div className="mt-14 h-full  ">
                        <div className="w-[80%] mx-auto ">
                            <div className="flex justify-end">
                                <button>Sign In</button>
                            </div>
                            <div className="mt-32">
                                    <div className="max-w-lg ml-10 space-y-3 mt-5">

                                    <div className="flex w-full flex-col text-gray-600 font-semibold">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                              onChange={handleFormChange}
                                            className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col text-gray-600 font-semibold">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                              onChange={handleFormChange}
                                            className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                                        />
                                    </div>

                                    <div className="flex w-full flex-col text-gray-600 font-semibold">
                                        <label>Enter valid phone number. We will contact you in whatsapp</label>
                                        <div className=" flex items-center space-x-1 w-full   ouline-green-400 border border-slate-600 rounded-lg">
                                            <h3 className="bg-gray-300 py-2 px-1 h-full p-0">+977</h3>
                                        <input
                                            type="text"
                                            name="mobileNumber"
                                            value={mobileNumber}
                                            maxLength={10}
                                              onChange={handleFormChange}
                                            className="w-full h-max py-2 px-1 outline-none border-none "
                                        />
                                        </div>
                                    </div>

                                <div className="flex w-full flex-col text-gray-600 font-semibold">
                                    <label>Password</label>
                                    
                                    <input
                                        value={password}
                                        type="password"
                                        name="password"
                                          onChange={handleFormChange}
                                        className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                                    />
                                </div>


                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="sticky bottom-0 overflow-hidden w-full ">
                        <Card>
                            <div className="flex justify-end ">
                                <button onClick={()=>{
                                    if(!firstName || !lastName || !password || !mobileNumber){
                                        throw 'fill all the required field'
                                    }
                                    router.push('/create/category/fundfor/goal/signup/document')
                                }} className="bg-[#02a95c] rounded-md text-white px-8 py-3">
                                    Continue
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}