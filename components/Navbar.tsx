'use client'

import { useSupabase } from "@/SupabaseComponents/SupabaseProvider"

export default function Navbar(){

    const {supabase} = useSupabase()

   async function handleLogout(){
        const {error} = await supabase.auth.signOut()
    }

    return(
        <div className="w-full bg-blue-300 flex justify-around py-3">
            <h1>Free Fund</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}