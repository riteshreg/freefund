'use cli'
import Card from "@/libsComponents/Card";

export default function Otp() {
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
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
            </div>
                                                  </div>


                        </div>

                    </div>
                </div>
                <div className="sticky bottom-0 overflow-hidden w-full ">
                    <Card>
                        <div className="flex justify-end ">
                            <button className="bg-[#02a95c] rounded-md text-white px-8 py-3">
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

//         <div>
//             <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
//   <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
//     <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
//       <div className="flex flex-col items-center justify-center text-center space-y-2">
//         <div className="font-semibold text-3xl">
//           <p>Phone Verification</p>
//         </div>
//         <div className="flex flex-row text-sm font-medium text-gray-400">
//           <p>We have sent a code to your phone 9746977612</p>
//         </div>
//       </div>

//       <div>
//         <form action="" method="post">
//           <div className="flex flex-col space-y-16">

//             <div className="flex flex-col space-y-5">
//               <div>
//                 <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
//                   Verify Account
//                 </button>
//               </div>

//               <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
//                 <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>    


{/* <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div className="w-16 h-16 ">
                <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
            </div> */}
