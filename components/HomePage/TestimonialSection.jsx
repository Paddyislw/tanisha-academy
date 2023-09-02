import { layout } from "@/utils/ClassNames";
import React from "react";
import Quotation from '../../utils/svg/Quotation.svg'
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <div className={`${layout} mt-20`}>
      <p className="text-lg text-center text-primaryDark font-semibold">
        Testimonial
      </p>
      <p className="text-4xl font-semibold leading-[43px] text-center">
        What our Client Says
      </p>
      <div className="grid grid-cols-3 w-fit mx-auto gap-20 mt-16">
        {testimonialData.map(({ name, company, des, icon }) => (
          <div key={name} className="w-[350px] border p-6 bg-[#f7f0fc] shadow-xl rounded-lg relative">
            <div className="flex space-x-4 mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm">{company}</p>
              </div>
            </div>
            <p className="text-sm text-darkGray">{des}</p>
            <Image src={Quotation} className="w-[70px] absolute -top-[40px] right-2 z-10" alt="Icon by UIcons"/>
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonialData = [
  {
    name: "Sulastri",
    company: "SMKN 1 Soehat",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation",
    icon: "",
  },
  {
    name: "Darmi",
    company: "Bajijay",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation",
    icon: "",
  },
  {
    name: "Marsha",
    company: "Astra",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation",
    icon: "",
  },
];
export default TestimonialSection;
