"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
export default function Information() {
  const router = useRouter();
  const {
    province,
    district,
    municipality,
    ward,
    firstName,
    lastName,
    profilePicture,
    wardCertificate,
    bankcheque,
    mobileNumber,
    thumbnailPicture,
    goal,
  } = useSelector((state: RootState) => state.createDonation);

  console.log(province);

  return (
    <>
      <div className="relative">
        <div>
          <div className="flex overflow-hidden bg-[#fbf8f6]">
            <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center">
              <h1 className="text-semibold text-3xl text-gray-700 min-w-[80%]">
                Have A Look At Your Information
              </h1>
            </div>
            <div className=" overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
              <div className="mt-2 w-[85%] ml-10 ">
                <div className="flex justify-end">
                  <button>Sign In</button>
                </div>
                <div className="mt-20 ">
                  <div className="flex flex-col space-y-5 items-start">
                    <div className="flex flex-col gap-5">
                      <span className="text-3xl font-semibold">
                        Donated Amount
                      </span>
                      <div className="w-30 h-40 font-light text-4xl bg-[#fbf8f6] rounded-lg px-4 py-2 shadow-md flex items-center justify-center">
                        {goal}
                      </div>
                      <button
                        onClick={() =>
                          router.push("/create/category/fundfor/goal")
                        }
                      >
                        <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="text-4xl font-semibold ">Address</div>
                      <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2  gap-3 text-2xl font-light">
                        Province:{" "}
                        <span className="font-semibold">{province}</span>
                        District:
                        <span className="font-semibold">{district} </span>
                        Municipality:
                        <span className="font-semibold"> {municipality}</span>
                        Ward:<span className="font-semibold">{ward} </span>
                      </div>
                      <button onClick={() => router.push("/create/category")}>
                        <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                      </button>
                    </div>
                    <div>
                      {" "}
                      <div className="grid  gap-6 font-light">
                        <div className="text-4xl font-semibold ">
                          Personal Info
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 text-2xl items-center ">
                          <div className="w-40  h-40  px-4 py-2">
                            <Image
                              alt="profile-picture"
                              src={profilePicture}
                              height={1000}
                              width={1000}
                              className=" rounded-[50%]"
                            />
                          </div>
                          Name:
                          <span className="font-semibold">
                            {firstName}
                            {lastName}
                          </span>
                          Phone:
                          <span className="font-semibold">{mobileNumber}</span>
                        </div>
                        <button
                          onClick={() =>
                            router.push("/create/category/fundfor/goal/signup")
                          }
                        >
                          <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                        </button>
                      </div>
                    </div>
                    <div className=" flex flex-col   gap-10 p-5">
                      <div className="flex flex-col gap-2 items-center font-semibold ">
                        <div className="text-2xl">Ward Certificate</div>
                        <div className=" px-4 py-2">
                          <Image
                            alt="wardCertificate"
                            src={wardCertificate}
                            height={500}
                            width={500}
                            className="rounded-lg"
                          />
                          <button
                            onClick={() =>
                              router.push(
                                "/create/category/fundfor/goal/signup/document"
                              )
                            }
                            className="p-5"
                          >
                            <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2  items-center font-semibold ">
                        <div className="text-2xl">Bank Cheque Receipt</div>
                        <div className=" px-4 py-2">
                          <Image
                            alt="bankcheque"
                            src={bankcheque}
                            height={500}
                            width={500}
                            className="rounded-lg"
                          />
                          <button
                            onClick={() =>
                              router.push(
                                "/create/category/fundfor/goal/signup/document"
                              )
                            }
                            className="p-5"
                          >
                            <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-center font-semibold ">
                        <div className="text-2xl">Thumbnail Picture</div>
                        <div className=" px-4 py-2">
                          <Image
                            alt="thumbnailPicture"
                            src={thumbnailPicture}
                            height={500}
                            width={500}
                            className="rounded-lg"
                          />
                          <button
                            onClick={() =>
                              router.push(
                                "/create/category/fundfor/goal/signup/document"
                              )
                            }
                            className="p-5"
                          >
                            <PencilSquareIcon className="w-10 h-10 text-blue-800" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
