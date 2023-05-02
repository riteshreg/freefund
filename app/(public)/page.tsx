import React from "react";
import Image from "next/image";
import HorizontalLine from "@/libsComponents/HorizontalLine";
import Card from "@/libsComponents/Card";
import { clients } from "../utils/data";
function Page() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src="/images/index.jpg"
          alt="index_image"
          width={2000}
          height={1500}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <h1 className="text-6xl font-bold text-center mb-8">
            Your Home For Help
          </h1>
          <button className="rounded-full px-6 py-4 bg-white shadow-md my-2 text-4xl hover:bg-blue-100">
            Go Start Funding
          </button>
        </div>
      </div>
      <div className="">
        <section id="intro" className="mx-24  p-5">
          <div className="grid grid-cols-1 lg:rows-2 ">
            <div className="mb-52 py-8">
              <span className="text-slate-400 font-bold ">What to expect</span>
              <h1 className="text-6xl font-bold">
                Fundraising With GoFundMe <br />
                Takes Just a Minute
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-8">
              <div className="my-8">
                <div className="border-l-4 lg:border-t-4 lg:border-l-0  border-slate-200 border-dashed p-10">
                  {" "}
                  <span className="primary-circle">1</span>
                  <h2 className="py-4 font-medium text-2xl">
                    Start With the basics
                  </h2>
                  <p className="text-slate-400 text-2xl font-light">
                    Kick things off with your name and location
                  </p>
                </div>{" "}
              </div>
              <div className="my-8">
                <div className="border-l-4 lg:border-t-4 lg:border-l-0  border-slate-200 border-dashed p-10">
                  <span className="primary-circle">2</span>
                  <h2 className="py-4 font-medium text-2xl">Tell Your Story</h2>
                  <p className="text-slate-400 text-2xl font-light">
                    We&apos;ll guide you with tips along the way
                  </p>
                </div>
              </div>
              <div className="my-8">
                <div className="border-l-4 lg:border-t-4 lg:border-l-0  border-slate-200 border-dashed p-10">
                  <span className="primary-circle">3</span>
                  <h2 className="py-4 font-medium text-2xl">
                    Share With Friends and Family
                  </h2>
                  <p className="text-slate-400 text-2xl font-light">
                    People out there want to help you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials"></section>
      </div>
    </>
  );
}

export default Page;
