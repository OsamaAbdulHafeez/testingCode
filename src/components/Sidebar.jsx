"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import { BsMotherboard } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsDatabaseFillDash } from "react-icons/bs";
import { MdDashboardCustomize } from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import personImage from "../../public/images/person.jpg";
import Image from "next/image";
const Sidebar = ({openSideBar}) => {
  const [active, setActive] = useState("Story boards");
  const menuItems = [
    {
      text: "Dasboard",
      icon: <MdDashboard size={26} />,
    },
    {
      text: "Employees",
      icon: <IoIosPerson size={26} />,
    },
    {
      text: "Story boards",
      icon: <BsMotherboard size={26} />,
    },
    {
      text: "Investigations",
      icon: <GiMagnifyingGlass size={26} />,
    },
    {
      text: "Complimentary Datasets",
      icon: <BsDatabaseFillDash size={26} />,
    },
    {
      text: "Integrations",
      icon: <MdDashboardCustomize size={26} />,
    },
  ];
  return (
    <>
    <div className={`${!openSideBar && 'hidden w-full'} lg:w-[22%] min-h-screen bg-stone-100 text-zinc-800 lg:flex flex-col justify-between p-6 pr-0`}>
      <div>
        <h1 className="text-xl font-bold mb-6">LOGO</h1>
        <div className="mt-4">
          <p className="text-gray-600 font-medium text-sm tracking-wider">
            Overview
          </p>
          <ul className="flex flex-col gap-2 mt-4 w-full">
            {menuItems.map((item, index) => (
              <li key={index} onClick={() => setActive(item.text)} className="flex justify-between gap-3">
                <p
                  className={`min-w-56 max-w-fit flex items-center gap-5 text-base font-semibold p-3 rounded-md cursor-pointer transition ${active === item.text
                      ? "bg-gray-800 text-white"
                      : "text-gray-700"
                  } hover:bg-gray-800 hover:text-white`}
                >
                  {item.icon}
                  {item.text}
                </p>
                <span
                  className={`${active === item.text ? "bg-gray-800 w-2" : ""} rounded-l-md`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-300 pt-6 pr-6">
        <div className="flex items-center gap-4 ">
          <Image
            src={personImage}
            alt="perosn Image"
            height={100}
            width={100}
            className="rounded-full h-10 w-10 object-cover"
          />
          <h3 className="text-gray-700 font-semibold">Pritam Ghosh</h3>
        </div>
        <div className="bg-white rounded-full p-1">
          <PiDotsThreeBold size={28} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
