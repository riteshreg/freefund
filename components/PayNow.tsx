'use client'
import Card from "@/libsComponents/Card";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import { ArrowTrendingUpIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PayNow(){
    
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

    return(
        <div className={`${scrollY>135 && 'sticky top-3'}`}>
       <Card>
          <div>
            <div className="flex items-center ">
              <h1 className="text-2xl ">$123,587</h1>
              <p className="text-sm ml-1">USD raised of $75,000 goal</p>
            </div>
            <div className="px-2 space-y-3 mt-5">
              <button className="bg-[#fdb72f] w-full py-3 px-8 rounded-lg">
                Donate
              </button>
              <button className=" bg-[#faa232] outline-2 outline-green-500 w-full py-3 px-8 rounded-lg">
                Share
              </button>
            </div>
            <div className="flex items-center my-4 space-x-2 mx-4">
              <div className="w-fit p-2 rounded-full bg-[#f0eaf4]">
            <ArrowTrendingUpIcon className="h-7 text-[#7a409b]"/>
              </div>
              <h1>
            7,613 people just donated
              </h1>
            </div>
            <HorizontalLine/>
            <div className="flex space-x-4 py-3 ">
              <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
              <UserIcon className="h-6"/>
              </div>
              <div className="flex flex-col">
                <h1>Ritesh Khadka</h1>
                <div className="flex  items-center space-x-2">
                  <h1 className="font-semibold text-sm">$1000</h1>
                  <p>•</p>
                  <Link href={'#'} className="underline text-sm">Top Donation</Link>
                </div>
              </div>
            </div>
            
              <HorizontalLine/>
            <div className="flex space-x-4 py-3 ">
              <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
              <UserIcon className="h-6"/>
              </div>
              <div className="flex flex-col">
                <h1>Ritesh Khadka</h1>
                <div className="flex  items-center space-x-2">
                  <h1 className="font-semibold text-sm">$1000</h1>
                  <p>•</p>
                  <Link href={'#'} className="underline text-sm">Top Donation</Link>
                </div>
              </div>
            </div>


            <HorizontalLine/>
            <div className="flex space-x-4 py-3 ">
              <div className="bg-[#f1f1f1] rounded-full min-w-[3rem] flex justify-center items-center ">
              <UserIcon className="h-6"/>
              </div>
              <div className="flex flex-col">
                <h1>Ritesh Khadka</h1>
                <div className="flex  items-center space-x-2">
                  <h1 className="font-semibold text-sm">$1000</h1>
                  <p>•</p>
                  <Link href={'#'} className="underline text-sm">Top Donation</Link>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="border-2 border-[#20b36f] rounded-md px-4 w-[30%] py-1">see all</button>
              <button className="border-2 flex items-center justify-around border-[#525252]  rounded-md w-[70%] px-4 py-1">
                <StarIcon className="h-7 text-gray-600"/>
                See top donations
              </button>
            </div>
          </div>
        </Card> 
       </div>
    )
}