"use client";

import { useSupabase } from "@/SupabaseComponents/SupabaseProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function Navbar() {
  const { supabase } = useSupabase();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
  }
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div
          className={
            scrollY
              ? ` bg-white fixed  h-28 overflow-hidden flex items-center justify-between px-4 shadow-md min-w-full`
              : `  bg-white absolute left-32 right-32 h-24 rounded-full my-8
          overflow-hidden flex items-center justify-between px-4 shadow-md`
          }
        >
          {" "}
          <div className=" flex gap-3 text-xl">
            <div className="flex gap-2 hover_box">
              <div className="">
                <MagnifyingGlassIcon className="w-7" />
              </div>
              <div>Search</div>
            </div>
            <div className="hover_box">For Individuals</div>
            <div className="hover_box">For Charity</div>
          </div>
          <div className="text-5xl text-bold">Free-Fund</div>
          <div className="flex gap-3 text-xl items-center">
            <div className="hover_box">How It Works</div>
            <div className="hover_box">Sign In</div>
            <div className="outline outline-blue rounded-full  outline-2 px-6 py-1 hover:bg-blue">
              Get Started
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
