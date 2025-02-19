"use client"
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cardData } from "@/data/card";
import { useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
export default function Home() {
  const today = new Date().toISOString("en-GB").split("T")[0];
  const [openSideBar,setOpenSideBar] = useState(false)
  console.log(openSideBar)
  return (
    <div className={`flex xl:container mx-auto`}>
      <Sidebar openSideBar={openSideBar}/>
      <div className={`w-full lg:w-[78%] bg-stone-400`}>
        <Navbar setOpenSideBar={setOpenSideBar}/>
        <div className="border-b-2 border-gray-300"></div>
        <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 lg:px-10 py-4">
          <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">Welcome Back, Pritam</h1>
          <div className="flex items-center gap-3">
            <BsCalendar2DateFill className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm sm:text-base lg:text-[19px] text-gray-800 cursor-pointer">{today}</span>
          </div>
        </div>
        <Cards/>
      </div>
    </div>
  );
}
