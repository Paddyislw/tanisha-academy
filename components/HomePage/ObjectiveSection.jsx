"use client";
import { layout } from "@/utils/ClassNames";
import React from "react";
import OrangeArrow from "../../utils/svg/OrangeArrow.svg";
import GreenArrow from "../../utils/svg/GreenArrow.svg";
import BlueArrow from "../../utils/svg/BlueArrow.svg";
import YellowArrow from "../../utils/svg/YellowArrow.svg";
import Image from "next/image";

const ObjectiveSection = () => {
  return (
    <div className={`${layout} mt-20`}>
      <p className="text-center text-primaryDark font-semibold text-lg">
        Benefits
      </p>
      <p className="text-center text-3xl font-semibold">
        Why Choose Tanisha Academy ?
      </p>
      <div className="grid grid-cols-2 justify-items-start w-fit mx-auto gap-16 mt-10">
        {objectiveData.map(({ des, title, svg }) => (
          <div key={title} className="w-[350px] flex items-start space-x-2">
            <Image
              src={svg}
              alt=""
              className="w-6 mt-1"
            />
            
            <div>
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-darkGray">{des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const objectiveData = [
  {
    title: "Quick Onboarding",
    svg: OrangeArrow,
    des: "Secure onboarding process. Set up a Demat account with just PAN, Aadhaar and eKYC.",
  },
  {
    title: "Easy Accessibility",
    svg: GreenArrow,
    des: "Login with biometrics or mobile number and buy/sell stocks from our web, Android or iOS platforms in one click.",
  },
  {
    title: "Smooth Orders",
    svg: BlueArrow,
    des: "With just a toggle switch, switch between intraday or delivery orders. Enjoy GTT and AMO on Stocks and F&O orders.",
  },
  {
    title: "Informed Decisions",
    svg: YellowArrow,
    des: "Search stocks easily using smart lists and smart filters. Get latest news, analyse charts and find in-depth.",
  },
];

export default ObjectiveSection;
