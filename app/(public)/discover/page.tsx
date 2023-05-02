import React from "react";
import Card from "@/libsComponents/Card";
import Image from "next/image";
import { clients } from "@/app/utils/data";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <div className=" min-h-screen flex justify-center items-center m-2">
        <div className="grid grid-cols-1 gap-8  ">
          <div>
            <Link href="/">
              <span className="bg-neutral-200 px-6 rounded-md text-xl font-light py-4 ">
                <ChevronLeftIcon className="w-5 inline" /> Home
              </span>
            </Link>
          </div>
          <div className="text-6xl font-bold">Browse fundraiser</div>
          <div className="text-4xl font-thin">
            People around the world are raising money for what they are
            passionate about
          </div>
          <div className="grid place-content-center">
            {" "}
            <span className="  text-center  bg-green-600 hover:bg-green-800 hover:cursor-pointer px-10  py-6 rounded-md uppercase font-semibold text-white text-xl shadow-2xl">
              {" "}
              Start Go Fund Me
            </span>
          </div>
        </div>
      </div>
      <section
        id="featured"
        className=" bg-orange-50 min-w-full px-5 lg:px-52 md:px-20 py-9 overflow-auto"
      >
        <h1 className="text-6xl font-normal my-5">Top FundRaiser</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {clients.map((client) => {
            return (
              <div key={client.id}>
                <Card>
                  <div className="w-full ">
                    <Image
                      src={`/images/5.jpg`}
                      alt="image"
                      width={1000}
                      height={1000}
                      className="rounded-md"
                    />
                    <h1 className="text-amber-800 font-bold text-2xl uppercase mt-5">
                      {client.address}
                    </h1>
                    <h2 className="font-bold text-2xl">{client.name}</h2>
                    <p className=" font-light mb-8">{client.description}</p>

                    <div className="w-full bg-amber-200 rounded-full h-1.5">
                      <div
                        className={`bg-green-400 h-1.5 rounded-full max-w-full`}
                        style={{
                          width: `${(client.col_amt / client.req_amt) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className=" font-light text-xl">
                      Rs{client.col_amt} of Rs{client.req_amt}
                    </span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
