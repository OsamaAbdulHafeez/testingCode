import Image from "next/image";
import React from "react";
import person from "../../public/images/person.jpg";
import person2 from "../../public/images/person2.jpg";
import person3 from "../../public/images/person3.jpg";
import person4 from "../../public/images/person4.jpg";
import person5 from "../../public/images/person5.jpg";
import puzzle from "../../public/images/puzzle.jpg";
const Cards = ({ data }) => {
  const images = [person, person2, person3, person4, person5];
  return (
    <div className="px-4 sm:px-5 md:px-6 lg:px-10 py-4 grid xl:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 lg:mt-3 w-full">
      <div className={`bg-gray-700 text-stone-100 px-6 py-4 rounded-xl xl:w-[22%]`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Sales Board</h3>
          <p className="text-xl">12</p>
        </div>
        <div className="flex justify-end pt-4">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="person"
              width={50}
              height={50}
              className="rounded-full object-cover w-8 h-8 -mr-2 z-[10]"
            />
          ))}
        </div>
      </div>
      <div className={`bg-gray-700 text-stone-100 px-6 py-4 rounded-xl xl:w-[22%]`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Appointments</h3>
          <p className="text-xl">43</p>
        </div>
        <div className="flex justify-end pt-4">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="person"
              width={50}
              height={50}
              className="rounded-full object-cover w-8 h-8 -mr-2 z-[10]"
            />
          ))}
        </div>
      </div>
      <div className={`bg-gray-700 text-stone-100 px-6 py-4 rounded-xl xl:w-[26%]`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Information of Sales</h3>
          <p className="text-xl">23</p>
        </div>
        <div className="flex justify-end pt-4">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="person"
              width={50}
              height={50}
              className="rounded-full object-cover w-8 h-8 -mr-2 z-[10]"
            />
          ))}
        </div>
      </div>
      <div className={`bg-gray-700 text-stone-100 px-6 py-4 rounded-xl xl:w-[34%]`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Information of Appointment</h3>
          <p className="text-xl">23</p>
        </div>
        <div className="flex justify-end pt-4">
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="person"
              width={50}
              height={50}
              className="rounded-full object-cover w-8 h-8 -mr-2 z-[10]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
