"use client";
import Cookies from "js-cookie";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [plateNo, setplateNo] = useState("");

  const handleInputChange = (e) => {
    setplateNo(e.target.value);
  };
  const handleSubmit = () => {
    Cookies.set("plateNo", plateNo);
    router.push("/order");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="px-8">
        <main className="flex flex-col items-center w-full p-4 mt-28">
          <h2 className="text-main-500 text-lg font-bold">
            Customer Information
          </h2>

          <div className="w-full mt-6 ">
            <label
              htmlFor="plateNo"
              className="block text-sm font-medium text-gray-700"
            >
              Plat Nomor
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="plateNo"
              id="plateNo"
              className="mt-1 p-2  text-black block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:border-transparent"
            />
            <div className="flex justify-center w-full ">
              <button
                onClick={handleSubmit}
                className="mt-4 bg-[#27374D] text-white px-12 py-1 rounded-md font-semibold hover:bg-spotpark-gray hover:text-main-500"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
