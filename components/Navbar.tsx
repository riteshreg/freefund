"use client";

import { useSupabase } from "@/SupabaseComponents/SupabaseProvider";
import { usePathname, useRouter } from "next/navigation";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function ReturnCssToNavbar(pathArray: Number, scrollY?: Number) {
  switch (pathArray) {
    case 3:
      return "h-28 overflow-hidden flex items-center justify-between px-4 shadow-md min-w-full";
    case 4:
      return "bg-blue-700";
  }
}

export default function Navbar() {
  const { supabase } = useSupabase();
  const currentPath = usePathname();

  const pathArray = currentPath.split("/");
  console.log(pathArray, pathArray.length);

  const [scrollY, setScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsExpanded(scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
  }

  if (pathArray.length === 4) {
    return (
      <div className="flex text-gray-200 bg-slate-600 h-14 justify-between px-4">
        <h1>FreeFund</h1>
        <h1>Login</h1>
      </div>
    );
  }

  return (
    <>
      <header className="">
        <div
          className={`
            ${
              pathArray.length == 2 &&
              (scrollY
                ? `fixed top-0 h-28 overflow-hidden flex items-center justify-evenly px-4 shadow-md  z-50 ${
                    isExpanded ? " w-full" : ""
                  }`
                : `absolute left-32 right-32 h-24 rounded-full my-8 overflow-hidden flex items-center justify-between px-4 shadow-md z-50 `)
            }
           
          ${ReturnCssToNavbar(pathArray.length)}                   
            
          bg-white
          transition-width duration-500 ease-in-out
          `}
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
