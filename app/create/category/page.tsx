"use client";

import Card from "@/libsComponents/Card";
import { useState } from "react";

export default function Category() {
  const [formData, setFormData] = useState({
    province: "",
    district: "",
    municipality: "",
    ward: "",
  });

  function handleFormChange() {}

  return (
     <div className="flex relative  overflow-hidden bg-[#fbf8f6] ">
    <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-gray-700 max-w-[60%] font-semibold">{`Let's begin your fundraising journey`}</h1>
      <p className="text-sm text-gray-600 ">{`We're here to guide you every step of the way.`}</p>
    </div>
    <div className="relative overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
      <div className="mt-14 h-full  ">
          <div className="w-[80%] mx-auto ">
        <div className="flex justify-end">
          <button>Sign In</button>
        </div>
        <div className="mt-32">
          <div className="flex  flex-col space-y-2 ">
            <h1 className="text-xl text-gray-800">Where are you located?</h1>
            <p className="text-sm text-gray-500">
              We use your location to verified you.
            </p>
          </div>
          <div className="mt-5 space-y-8">
            <div className="flex gap-5">
              <div className="flex w-full flex-col text-gray-600 font-semibold">
                <label>Province</label>
                <input
                  type="text"
                  name="province"
                  onChange={handleFormChange}
                  className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                />
              </div>
              <div className="flex w-full flex-col text-gray-600 font-semibold">
                <label>District</label>
                <input
                  type="text"
                  name="province"
                  onChange={handleFormChange}
                  className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex w-full flex-col text-gray-600 font-semibold">
                <label>Municipality</label>
                <input
                  type="text"
                  name="province"
                  onChange={handleFormChange}
                  className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                />
              </div>
              <div className="flex w-full flex-col text-gray-600 font-semibold">
                <label>Ward</label>
                <input
                  type="text"
                  name="province"
                  onChange={handleFormChange}
                  className="w-full py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                />
              </div>
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
