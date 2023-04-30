'use client'
import Card from "@/libsComponents/Card";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";

const link =
  "https://images.gofundme.com/yDMz0IUbo4m8NxEB3QBFY5OZepQ=/640x480/https://d2g8igdw686xgo.cloudfront.net/72546271_1682534329737438_r.jpeg";

const khaltiLogoImg = 'https://dao578ztqooau.cloudfront.net/static/img/logo1.png'
const esewaLogoImg = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp"

export default function Donate() {
  const [donationAmmount, setDonationAmmount] = useState('')

  function handleDonationInputFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
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
              <div className="border py-3 border-gray-500 rounded-lg">

              <ul className="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required/>
        <label  className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">0-50 MB</div>
                <div className="w-full">Good for small websites</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer"/>
        <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">500-1000 MB</div>
                <div className="w-full">Good for large websites</div>
            </div>
            <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </label>
    </li>
</ul>

              </div>
            </div>


          </div>
        </Card>
      </div>
    </div>
  );
}
