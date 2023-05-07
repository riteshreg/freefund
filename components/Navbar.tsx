"use client";

import { useSupabase } from "@/SupabaseComponents/SupabaseProvider";
import { usePathname, useRouter } from "next/navigation";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Link from "next/link";

function ReturnCssToNavbar(pathArray: Number, scrollY?: Number) {
  switch (pathArray) {
    case 3:
      return "h-28 overflow-hidden flex items-center justify-between px-4 shadow-md min-w-full";
      break;
    case 4:
      return "bg-blue-700";
      break;
    default:
      return "h-28 overflow-hidden flex items-center justify-between px-4 shadow-md min-w-full";
  }
}

export default function Navbar() {
  const { supabase } = useSupabase();
  const currentPath = usePathname();
  const router = useRouter();
  const pathArray = currentPath.split("/");
  console.log("patharray", "length", pathArray, pathArray.length);

  const [scrollY, setScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [navisExtended, setisnavExtended] = useState(false);
  const handleHowItWorks = () => {
    console.log("clicked");
    router.push("/how-it-works");
  };
  const handleSearch = () => {};

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
  if (pathArray[1] === "discover" || pathArray[1] === "how-it-works") {
    return (
      <div className="  overflow-hidden flex items-center justify-evenly px-4 shadow-md  z-50 min-w-full h-28">
        <div className=" flex   gap-3 text-xl">
          <div className="flex gap-2 hover_box " onClick={handleSearch}>
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
          <div className="hover_box">
            <button onClick={handleHowItWorks}>How It Works</button>{" "}
          </div>
          <div className="hover_box">Sign In</div>
          <button className="outline outline-green-700 rounded-md  outline-2 px-6 py-1 hover:bg-green-900 hover:text-white">
            Start a Go Fund Me
          </button>
        </div>{" "}
      </div>
    );
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
                ? `fixed top-0  overflow-hidden flex items-center justify-evenly px-4 shadow-md  z-50 ${
                    isExpanded ? " w-full" : ""
                  }`
                : `absolute left-32 right-32  rounded-full my-8 overflow-hidden flex items-center justify-between px-4 shadow-md z-50 `)
            }
           
          ${
            pathArray.length > 2 && ReturnCssToNavbar(pathArray.length)
          }                   
            
          bg-white
          transition-width duration-500 ease-in-out
          h-24
          `}
        >
          {" "}
          <div className=" flex   gap-3 text-xl">
            <div className="flex gap-2 hover_box " onClick={handleSearch}>
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
            <div className="hover_box">
              <button onClick={handleHowItWorks}>How It Works</button>
            </div>
            <div className="hover_box">Sign In</div>
            <div className="outline outline-blue rounded-full  outline-2 px-6 py-1 hover:bg-blue">
              Get Started
            </div>
          </div>{" "}
        </div>
      </header>
    </>
  );
}
