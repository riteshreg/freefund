"use client";
import { AdminLayoutContext } from "@/libs/AdminContext";
import { useContext } from "react";
import { AdminContextTypes } from "@/libs/AdminContext";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
export default function AdminSidebar() {
  const { isOpen } = useContext(AdminLayoutContext) as AdminContextTypes;
  const { setIsOpen } = useContext(AdminLayoutContext) as AdminContextTypes;
  return (
    <div className="">
      {isOpen && (
        <>
          <div className=" lg:h-screen h-full lg:w-72 w-full  lg:shadow-lg text-white  ">
            <div className="flex flex-col w-full lg:mx-3 gap-6 lg:py-8 text-blue-800 md:justify-center md:items-center md:my-auto ">
              <div className="flex gap-2">
                <h1 className="font-bold  text-5xl">
                  <Link href="/admin">Dashboard</Link>{" "}
                </h1>{" "}
              </div>
              <Link href="/donation">
                <div className=" text-xl font-light p-5 hover:bg-blue-800 hover:text-white rounded-lg">
                  Donations
                </div>
              </Link>
              <Link href="/history">
                <div className="text-xl font-light p-5 hover:bg-blue-800 hover:text-white  rounded-lg">
                  History
                </div>
              </Link>
            </div>
            <footer className="absolute bottom-7 p-3 text-white bg-blue-800  w-72 h-12">
              <span className="text-sm sm:text-center">
                © 2023 <a href="https://flowbite.com/">Free-Fund</a>. All Rights
                Reserved.
              </span>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
