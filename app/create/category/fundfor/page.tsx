"use client";

import Card from "@/libsComponents/Card";
import Image from "next/image";
import { useState } from "react";

export default function Category() {
  const [formData, setFormData] = useState({
    province: "",
    district: "",
    municipality: "",
    ward: "",
  });

  const [selectFundFor, setSelectFundFor] = useState(0);

  const handleClick = (id:number) => {
    setSelectFundFor(id);
  };

  function handleFormChange() {}

  return (
    <div className="flex relative  overflow-hidden bg-[#fbf8f6] ">
      <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
        <h1 className="text-3xl text-gray-700 max-w-[80%] font-semibold">
          Tell us a bit more about your fundraiser
        </h1>
        <p className="text-sm text-gray-700 max-w-[80%] ">
          This information helps us get to know you and your fundraising needs.
        </p>
      </div>
      <div className="relative overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
        <div className="mt-14 h-full  ">
          <div className="w-[80%] mx-auto ">
            <div className="flex justify-end">
              <button>Sign In</button>
            </div>
            <div className="mt-32">
              <div className="flex  flex-col space-y-2 ">
                <h1 className="text-xl text-gray-800">
                  Who are you fundraising for?
                </h1>
              </div>
              <div className="mt-5 space-y-8">
               
              <div className="flex">
      
                <ul className="grid w-full gap-6 ">

                  <li onClick={()=>handleClick(1)}>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      className="hidden peer"
                      required
                    />
                    <label className={` ${selectFundFor  === 1 && 'bg-[#e6f6ef] border-green-600' } border-gray-400 inline-flex items-center justify-between w-full  px-2 py-1 text-gray-500 bg-white border rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-[#e6f6ef] `}>
                      <div className="block peer-checked:bg-red-600">
                        <div className="w-full peer-checked:bg-red-600 text-lg font-semibold">
                         Yourself
                        </div>
                        <div className="w-full text-sm text-slate-700">Funds are delivered to your bank account for your own use</div>
                      </div>
                        <Image  src={'/images/yourself.png'}  height={100} width={100} alt="yourself"/>
                    </label>
                  </li>
                 
                  <li onClick={()=>handleClick(2)}>
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      className="hidden peer"
                      required
                    />
                    <label className={` ${selectFundFor === 2 && 'bg-[#e6f6ef]  border-green-600' } border-gray-400 inline-flex items-center justify-between w-full  px-2 py-1  text-gray-500 bg-white border rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-[#e6f6ef] `}>
                      <div className="block peer-checked:bg-red-600">
                        <div className="w-full peer-checked:bg-red-600 text-lg font-semibold">
                        Someone else
                        </div>
                        <div className="w-full text-sm text-slate-700">You’ll invite a beneficiary to receive funds or distribute them yourself</div>
                      </div>
                      <Image  src={'/images/someone.png'}  height={100} width={100} alt="yourself"/>

                    </label>
                  </li>



                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 overflow-hidden w-full ">
          <Card>
            <div className="flex justify-end ">
              <button className="bg-[#02a95c] rounded-md text-white px-8 py-3">
                Continue
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
