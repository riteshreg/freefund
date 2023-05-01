"use client";
import Card from "@/libsComponents/Card";
import { useState } from "react";

export default function Goal() {
  const [startingGoal, setStartingGoal] = useState<string>("0");

  function handleDonationInputFieldChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const inputValue = event.target.value;
    // Remove all commas from the input value
    const sanitizedValue = inputValue.replace(/,/g, "");
    // Parse the sanitized value as a number
    const parsedValue = sanitizedValue ? parseInt(sanitizedValue, 10) : 0;
    // Format the number with commas in the Indian style
    const formattedValue = parsedValue.toLocaleString("en-IN");
    setStartingGoal(formattedValue);
  }

  return (
    <div className="flex relative  overflow-hidden bg-[#fbf8f6] ">
      <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
        <h1 className="text-3xl text-gray-700 max-w-[80%] font-semibold">
          How much would you like to raise?
        </h1>
        <p className="text-sm text-gray-700 max-w-[80%] ">
         {`It's completely expected to need funds beyond your starting goal. You
          can always change your goal as you go.`}
        </p>
      </div>
      <div className="relative overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
        <div className="mt-14 h-full  ">
          <div className="w-[70%] mx-auto ">
            <div className="flex justify-end">
              <button>Sign In</button>
            </div>

            <div className="mt-32 max-w-lg">
              <div className="mt-5 space-y-8">
                <label className="border flex items-center relative border-green-600 py-1 px-1 rounded-2xl">
                  <h4 className="px-3">RS.</h4>
                  <div>
                    <p className="text-xs text-gray-900">Your starting goal</p>
                    <input
                      type="text"
                      maxLength={10}
                      value={startingGoal}
                      onChange={handleDonationInputFieldChange}
                      className="w-full py-2  font-semibold text-gray-800 text-xl px-1   border-none outline-none"
                    />
                  </div>
                </label>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold mt-5">Keep in mind that transaction fees, including credit and debit charges, are deducted from each donation.</p>
              </div>
              <div className="mt-5 bg-[#e7f0f7] rounded-xl shadow px-8 py-6">
                <p  className="text-sm text-gray-700">To receive money raised, please make sure the person withdrawing has:</p>
                <ul className="list-disc px-5 text-sm text-gray-700 space-y-1 mt-3">
                    <li>A Ward office certificate</li>
                    <li>A bank account</li>
                </ul>
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
