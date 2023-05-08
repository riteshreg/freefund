"use client";

import { createClient } from "@/SupabaseComponents/SupabaseBrowserClient";
import { GetBucketNameForCreateFund } from "@/libs/TinyFunction";
import Card from "@/libsComponents/Card";
import { CreateDonationChangeHandler } from "@/redux/CreateDonationSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface SupabaseFetch{
  // data:{
    path:string
  // },
  // error:{
  //   statusCode:string;
  //   error:string;
  //   message:string;
  // }
}


interface ApiResponse<T> {
  data: T | null;
  error: any;
  status: number;
}

export default function Document() {

  const dispatch = useDispatch();
  const supabase = createClient();
  const router = useRouter()

 
  const [uploadData, setUplaodData] = useState({
    wardCertificate: "",
    bankcheque: "",
    profilePicture: "",
    thumbnailPicture: "",
  });

  const { wardCertificate, bankcheque, profilePicture, thumbnailPicture } =
    useSelector((state: RootState) => state.createDonation);

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {

    const file = event.target.files?.[0];
    console.log(file);
    
    const bucketName = GetBucketNameForCreateFund(event.target.name)

    if (file) {

      const url = URL.createObjectURL(file);
      const fileName = event.target.name + file.name + new Date().getTime();
      
      console.log("2",url, fileName);
      

            const {data, error} = await supabase.storage
        .from(bucketName)
        .upload(fileName, file)  as ApiResponse<SupabaseFetch>


        if(error){
          if(event.target.name === 'thumbnailPicture'){
            toast.error('thumbnail must be less than 1 mb')
          }
          else{
            toast.error(`${event.target.name} must be less than 200kb`)
          }
        }

      if (!error) {

        setUplaodData((prevState) => ({
          ...prevState,
          [event.target.name]: url,
        }));

        dispatch(
          CreateDonationChangeHandler({
            key: event.target.name,
            value:
              `https://idrkpjmuvqzcfkyvqrue.supabase.co/storage/v1/object/public/${bucketName}/` +
              data?.path
            })
        );
      }
   
    }
  }

  return (
    <div className="relative">
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <div>
          <div className="flex   overflow-hidden bg-[#fbf8f6] ">
            <div className="w-[34%]  space-y-5 h-screen flex flex-col justify-center items-center ">
              <h1 className="text-3xl text-gray-700 max-w-[80%] font-semibold">{`Keep your account safe
`}</h1>
              <p className="text-lg text-gray-600 max-w-[80%] ">{`Add your phone number for another layer of security and to receive important messages.
`}</p>
            </div>
            <div className=" overflow-y-scroll flex-grow h-screen  bg-[#ffffff] rounded-l-[6rem] shadow border-gray-100 border-2">
              <div className="mt-2 w-[85%] ml-10 ">
                <div className="flex justify-end">
                  <button>Sign In</button>
                </div>
                <div className="mt-32">
                  <div className=" w-full ml-10 space-y-8 mt-5">
                    <div className="h-40 rounded-md  w-full space-x-4 px-1 py-2  items-center  flex text-gray-600 font-semibold">
                      {" "}
                      <label className="min-w-[10rem]">{`Ward Certificate(IMAGE)`}</label>
                      <input
                        type="file"
                        name="wardCertificate"
                        onChange={handleFileUpload}
                        className="w-52 py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                      />
                      {uploadData.wardCertificate && (
                        <Image
                          className="h-40 flex-grow rounded-lg w-60"
                          src={uploadData.wardCertificate}
                          alt="url"
                          height={300}
                          width={300}
                        />
                      )}
                    </div>

                    <div className="h-40 rounded-md  w-full space-x-4 px-1 py-2  items-center  flex text-gray-600 font-semibold">
                      {" "}
                      <label className="min-w-[10rem]">{`Bank Cheque(IMAGE)`}</label>
                      <input
                        type="file"
                        name="bankcheque"
                        onChange={handleFileUpload}
                        className="w-52 py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                      />
                      {uploadData.bankcheque && (
                        <Image
                          className="h-40 flex-grow rounded-lg w-60"
                          src={uploadData.bankcheque}
                          alt="url"
                          height={300}
                          width={300}
                        />
                      )}
                    </div>

                    <div className="h-40 rounded-md  w-full space-x-4 px-1 py-2  items-center  flex text-gray-600 font-semibold">
                      {" "}
                      <label className="min-w-[10rem]">{`PasswordSize Phone`}</label>
                      <input
                        type="file"
                        name="profilePicture"
                        onChange={handleFileUpload}
                        className="w-52 py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                      />
                      {uploadData.profilePicture && (
                        <Image
                          className="h-40 flex-grow rounded-lg w-60"
                          src={uploadData.profilePicture}
                          alt="url"
                          height={300}
                          width={300}
                        />
                      )}
                    </div>

                    <div className="h-40 rounded-md  w-full space-x-4 px-1 py-2  items-center  flex text-gray-600 font-semibold">
                      {" "}
                      <label className="min-w-[10rem]">{`Thumbnail`}</label>
                      <input
                        type="file"
                        name="thumbnailPicture"
                        onChange={handleFileUpload}
                        className="w-52 py-2  px-1  ouline-green-400 border border-slate-600 rounded-lg"
                      />
                      {uploadData.thumbnailPicture && (
                        <Image
                          className="h-40 flex-grow rounded-lg w-60"
                          src={uploadData.thumbnailPicture}
                          alt="url"
                          height={300}
                          width={300}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky bottom-0 w-full ">
                <Card>
                  <div className="flex justify-end ">
                    <button
                      className="bg-[#02a95c] rounded-md text-white px-8 py-3"
                      onClick={() =>
                        router.push(
                          "/create/category/fundfor/goal/signup/document/information"
                        )
                      }
                    >
                      Continue
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
