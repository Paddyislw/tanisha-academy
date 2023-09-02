import { layout } from "@/utils/ClassNames";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className={`xl:h-auto pt-8 pb-28  ${layout} overflow-hidden flex justify-between mt-10 items-center sm:flex-col`}
    >
      <div className="space-y-6 mb-6">
        <div>
          <p className="text-lg font-semibold text-darkGray">Our Objective</p>
          <p className="text-5xl font-semibold leading-[60px] xl:text-4xl lg:text-4xl sm:text-6xl mb:text-3xl mb:text-center animate-pop-in title text-primary">
            Learn to trade in a <br />
            Simple Way
          </p>
        </div>
        <p className="w-[400px] lg:text-sm mb:w-auto mb:text-center animate-pop-in subtitle text-darkGray">
          Welcome to Begin Trader, where we are dedicated to embarking on a
          transformative journey with you, guiding you every step of the way on
          your path to becoming a successful trader.
        </p>
        <div className="flex space-x-4">
          <button className="px-7 py-4 border rounded-full shadow-xl text-sm text-primaryDark font-semibold">
            Get Started Today
          </button>
          <button className="text font-semibold  rounded-lg  py-3 text-primaryDark flex items-center ">
            Join Us Now
            <p className="w-12 h-[3px] border border-primaryDark bg-primaryDark rounded-xl mx-2"></p>
          </button>
        </div>
      </div>
      <div className="relative w-fit">
        <div
          className="w-[400px] xl:w-[500px] lg:w-[400px] md:w-[350px] sm:w-[500px] animate-image-pop-in  h-[450px] rounded-b-full rounded-tl-full"
          // style={{
          //   background: "rgb(2,150,209)",
          //   background:
          //     "linear-gradient(180deg, rgba(2,150,209,1) 27%, rgba(195,238,255,1) 100%)",
          // }}
          style={{
            background: "rgb(2,150,209)",
            background:
              "linear-gradient(180deg, rgba(2,150,209,1) 27%, rgba(245,231,255,1) 100%)",
          }}
        ></div>
        <div
          className="w-[400px] xl:w-[500px] lg:w-[400px] md:w-[350px] sm:w-[500px] animate-image-pop-in bg-primaryLight -z-10 h-[450px] rounded-b-full rounded-tl-full absolute top-4 left-6"
          // style={{
          //   background: "rgb(138,222,255)",
          //   background:
          //     "linear-gradient(180deg, rgba(138,222,255,1) 27%, rgba(195,238,255,1) 100%)",
          // }}
          style={{
            background: "rgb(138,222,255)",
            background:
              "linear-gradient(180deg, rgba(138,222,255,1) 27%, rgba(245,231,255,1) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
