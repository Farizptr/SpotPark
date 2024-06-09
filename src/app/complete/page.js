import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
export default function Complete() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image-bg.png')" }}
      >
        <div className="flex items-center justify-center min-h-screen pb-2">
          <h1 className=" text-main-500 font-semibold text-2xl">
            Your park is secured!
          </h1>
        </div>
      </div>
    </div>
  );
}
