"use client";
import Card from "@/libsComponents/Card";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
const khatliImage = "/../../../../../public/images/khalti.jpg";

const link =
  "https://images.gofundme.com/yDMz0IUbo4m8NxEB3QBFY5OZepQ=/640x480/https://d2g8igdw686xgo.cloudfront.net/72546271_1682534329737438_r.jpeg";

export default function Donate() {
  const [donationAmmount, setDonationAmmount] = useState("");

  function handleDonationInputFieldChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setDonationAmmount(event.target.value.replace(/[^0-9]/g, ""));
  }

  console.log(donationAmmount);

  return (
    <div>
      <div className="max-w-xl mx-auto pb-28  mt-10">
        <Card>
          <div className="w-[90%] mx-auto">
            <div className="border border-gray-400 w-fit flex justify-center items-center rounded-lg px-2 py-1">
              <ChevronLeftIcon className="h-7" />
              Return to fundraiser
            </div>

            <div className="py-5 flex gap-4 items-center">
              <Image
                src={link}
                className="h-20 rounded-sm w-32"
                height={100}
                width={110}
                alt="पिठित"
              />
              <div className="space-y-1">
                <h4>
                  {`You're supporting`}
                  <span className="font-semibold"> I need your Help!!!</span>
                </h4>
                <p className="text-sm text-gray-500">
                  Your donation will benefit Andres Acevedo
                </p>
              </div>
            </div>

            <div className="">
              <label className="">
                <div className="heading-3">Enter your donation</div>
              </label>
              <div className="flex border px-2 justify-between border-gray-400 rounded-xl h-20">
                <div className=" flex flex-col justify-center text-xl items-center font-bold px-4">
                  <span className="">RS</span> <span className="">Nepali</span>
                </div>
                <div className="text-3xl w-full font-bold text-gray-700">
                  <input
                    onChange={handleDonationInputFieldChange}
                    type="text"
                    id="checkout-donation"
                    name="donationAmount"
                    maxLength={6}
                    value={donationAmmount}
                    className=" text-right w-[85%] h-full border-none outline-none"
                  />
                  <span className="">.00</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="font-semibold">Payment method</h4>
              <div className="border py-1 border-gray-500 rounded-lg">
                <ul className=" text-sm font-medium text-gray-900   ">
                  <li className="w-full">
                    <div className="w-full flex items-center pl-3">
                      <label className="flex  items-center space-x-5 w-full py-1 ml-2 text-sm font-medium text-gray-900 ">
                        <input
                          id="list-radio-license"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 dark:focus:ring-blue-600   focus:ring-2 dark:bg-gray-600 "
                        />
                        <Image
                          src={"/images/khalti.png"}
                          height={120}
                          width={120}
                          alt="khalti"
                        />
                        <h4 className="text-lg text-gray-700">Khalti</h4>
                      </label>
                    </div>
                    <HorizontalLine />
                  </li>

                  <li className="w-full">
                    <div className="w-full flex items-center pl-3">
                      <label className="flex  items-center space-x-5 w-full py-1 ml-2 text-sm font-medium text-gray-900 ">
                        <input
                          id="list-radio-license"
                          type="radio"
                          value=""
                          name="list-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 dark:focus:ring-blue-600   focus:ring-2 dark:bg-gray-600 "
                        />
                        <Image
                          src={"/images/esewa.png"}
                          height={120}
                          width={120}
                          alt="esewa"
                        />
                        <h4 className="text-lg text-gray-700">Esewa</h4>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mt-10">
              <button className="w-full py-4 text-white text-lg  bg-black rounded-xl">
                <div className="flex justify-center mr-4  items-center">
                  <h4>Pay</h4>
                </div>
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
