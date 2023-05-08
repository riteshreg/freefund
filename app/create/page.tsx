"use client"

import { createClient } from "@/SupabaseComponents/SupabaseBrowserClient";
import Card from "@/libsComponents/Card";
import {useEffect} from 'react'

export default function Create(){

    const supabase = createClient()

    useEffect(()=>{
      const data = supabase.auth.getSession().then((response)=>{
        
        console.log(response);
      })
      
    },[])

   async function handleGoogleLogin(){        
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider:'google',
            options: {
              redirectTo: 'https://freefundweb.vercel.app/create/category'
            }
        },
        )        
    }


    return(
        <div className="flex relative  overflow-hidden bg-[#fbf8f6] ">
        <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
          <h1 className="text-3xl text-gray-700 max-w-[60%] font-semibold">{`Let's begin your fundraising journey`}</h1>
          <p className="text-sm text-gray-600 ">{`We're here to guide you every step of the way.`}</p>
        </div>
        <div className="relative overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
          <div className="mt-14 h-full  ">
              <div className="w-[80%] mx-auto ">
            <div className="flex justify-end">
              <button>Sign In</button>
            </div>
            <div className="mt-32">
              <div className="flex  flex-col space-y-2 ">
                <h1 className="text-2xl text-gray-800">Continue with google</h1>
                <p className="text-sm text-gray-500">
                </p>
              </div>
              <div className="mt-5 space-y-8">
                   
                  <button  onClick={handleGoogleLogin} className="bg-slate-300 px-8 py-2 rounded-md ">Google</button>
    
              </div>
            </div>
    
              </div>
          </div>
          <div className="sticky bottom-0 overflow-hidden w-full ">
              <Card>
                  <div className="flex justify-end ">
                      <button className="bg-red-400 rounded-md text-white px-8 py-3">
                          Cancel
                      </button>
                  </div>
              </Card>
          </div>
        </div>
        </div>
)}
