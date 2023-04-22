'use client'
import { createClient } from "@/libs/supaBrowserClient"

export default function Navbar(){
    
    const supabase = createClient()

    async function signout() {
        const { error } = await supabase.auth.signOut()
      }

    return(
        <div className="flex justify-around  bg-blue-200">
            <h1>Navbar</h1>
            <button onClick={signout}>Logout</button>
        </div>
    )
}