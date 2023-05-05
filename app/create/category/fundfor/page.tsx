"use client";

import Card from "@/libsComponents/Card";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateDonationChangeHandler } from "@/redux/CreateDonationSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

interface HandleClickArgs{
  id:number;
  name:string;

}

export default function Category() {

  const [selectFundFor, setSelectFundFor] = useState(0);

  
  const dispatch = useDispatch()
  const router = useRouter()
  
  const handleClick = ({id, name}:HandleClickArgs) => {
    setSelectFundFor(id)
    dispatch(CreateDonationChangeHandler({key:'fundFor', value:name}))
  };

  function handleNextPage() {
    if(selectFundFor == 0){
      throw 'Who are you fundraising for?'
    }

    router.push('/create/category/fundfor/goal')
  }

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

                  <li >
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      className="hidden peer"
                      required
                    />
                    <button onClick={()=>handleClick({id:1, name:'Yourself'})} className={` ${selectFundFor  == 1 && 'bg-green-300 border-green-600' } border-gray-400 inline-flex items-center justify-between w-full  px-2 py-1 text-gray-500 border rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-green-300 `}>
                      <div className="block peer-checked:bg-red-600">
                        <div className="w-full peer-checked:bg-red-600 text-lg font-semibold">
                         Yourself
                        </div>
                        <div className="w-full text-sm text-slate-700">Funds are delivered to your bank account for your own use</div>
                      </div>
                        <Image  src={'/images/yourself.png'}  height={100} width={100} alt="yourself"/>
                    </button>
                  </li>
                 
                  <li >
                    <input
                      type="radio"
                      id="hosting-small"
                      name="hosting"
                      value="hosting-small"
                      className="hidden peer"
                      required
                    />
                    <div onClick={()=>handleClick({id:2, name:'Someone else'})} className={` ${selectFundFor == 2 ? ('bg-green-300  border-green-600') : '' } border-gray-400 inline-flex items-center justify-between w-full  px-2 py-1  text-gray-500 border rounded-lg cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600  hover:bg-green-300 `}>
                      <div className="block peer-checked:bg-red-600">
                        <div className="w-full peer-checked:bg-red-600 text-lg font-semibold">
                        Someone else
                        </div>
                        <div className="w-full text-sm text-slate-700">You’ll invite a beneficiary to receive funds or distribute them yourself</div>
                      </div>
                      <Image  src={'/images/someone.png'}  height={100} width={100} alt="yourself"/>

                    </div>
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
              <button onClick={handleNextPage} className="bg-[#02a95c] rounded-md text-white px-8 py-3">
                Continue
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
