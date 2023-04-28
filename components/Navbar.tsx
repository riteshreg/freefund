'use client'

import { useSupabase } from "@/SupabaseComponents/SupabaseProvider"
import { useRouter } from "next/navigation"


import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
export default function Navbar(){

    const {supabase} = useSupabase()


   async function handleLogout(){
        const {error} = await supabase.auth.signOut()
    }

    return(
      <>
      <header>
      <div className="flex flex-row justify-evenly items-center py-10 mx-auto min-w-screen bg-white shadow-sm">
    <div className="flex justify-start items-center space-x-3 ">
      <div className="border-b flex">
     <MagnifyingGlassIcon className="w-9"/>
        <input type="text" className="outline-none w-20" placeholder="Search.." />
      </div>
      <div className="">Individuals</div>
      <div className="">Charities</div>
    </div>
    <div className="flex-1 text-center text-4xl">Free-Fund</div>
    <div className="mx-8">Login</div>
  </div>
      </header>
     



      </>
    )
}