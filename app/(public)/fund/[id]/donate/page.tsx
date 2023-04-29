'use client'
import Card from "@/libsComponents/Card";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const link =
  "https://images.gofundme.com/yDMz0IUbo4m8NxEB3QBFY5OZepQ=/640x480/https://d2g8igdw686xgo.cloudfront.net/72546271_1682534329737438_r.jpeg";

export default function Donate() {
  const [donationAmmount, setDonationAmmount] = useState('')

  function handleDonationInputFieldChange(event:React.ChangeEvent<HTMLInputElement>){
    setDonationAmmount(event.target.value.replace(/[^0-9]/g, ''))

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
              <div className="flex border px-2 justify-between border-gray-600 rounded-xl h-20">
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
          </div>
        </Card>
      </div>
    </div>
  );
}
