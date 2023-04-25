"use client";
import { createClient } from "@/SupabaseComponents/SupabaseBrowserClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewPassword() {
  const [crediantials, setCrediantials] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const supabase = createClient();
  const route = useRouter()

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCrediantials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleCreateNewPassword() {
    if (
      !crediantials.email ||
      !crediantials.password ||
      !crediantials.confirm_password
    ) {
      throw "Please enter all crediantials";
    }

    if (crediantials.password !== crediantials.confirm_password) {
      throw "password dont match";
    }

    const session = await supabase.auth.getSession();

    if (
      !session.error &&
      session.data.session?.user.email == crediantials.email
    ) {
      const { data, error } = await supabase.auth.updateUser({
        password: crediantials.password,
      });
      if(!error){
        route.push('/')
      }
    }

    throw session.error;
  }

  return (
    <div>
      <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-7">
            <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
              Create New Password
            </p>
            <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
              Already have account?{" "}
              <Link
                href="/login"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
              >
                {" "}
                Go to Login
              </Link>
            </p>

            <div className="w-full flex items-center justify-between pt-3">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>

              <input
                onChange={handleFormChange}
                name="email"
                aria-labelledby="email"
                type="email"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div>
              <label
                id="password"
                className="text-sm font-medium leading-none text-gray-800"
              >
                New Password
              </label>

              <input
                onChange={handleFormChange}
                name="password"
                aria-labelledby="password"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div>
              <label
                id="confirm_passowrd"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Confirm Password
              </label>

              <input
                onChange={handleFormChange}
                name="confirm_password"
                aria-labelledby="confirm_password"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div className="mt-6">
              <button
                role="button"
                onClick={handleCreateNewPassword}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
