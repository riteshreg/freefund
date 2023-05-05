"use client";

import { useContext } from "react";
import { AdminLayoutContext } from "@/libs/AdminContext";
import { AdminContextTypes } from "@/libs/AdminContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function AdminNavbar() {
  const { setIsOpen } = useContext(AdminLayoutContext) as AdminContextTypes;
  const { isOpen } = useContext(AdminLayoutContext) as AdminContextTypes;
  return (
    <div className="flex min-w-full items-center justify-evenly shadow-md  bg-blue-700 px-3 py-2 ">
      <button
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <Bars3Icon className="w-8 text-white " />
      </button>
      <div>
        <h1 className="text-6xl text-white font-bold">Free-Fund</h1>
      </div>
      <div className="flex items-center gap-2 h-10 w-10 bg-white rounded-full ">
        <Image
          src="/images/avatar.png"
          alt="user-pic"
          height={1000}
          width={1000}
        />
        <h3 className="text-xl text-white font-light">Login</h3>
      </div>
    </div>
  );
}
