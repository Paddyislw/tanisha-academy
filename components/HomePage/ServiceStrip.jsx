import { layout } from "@/utils/ClassNames";
import React from "react";

const ServiceStrip = () => {
  return (
    <div
      className={` mt-20 bg-gray-100 ${layout} py-20`}
      //    style={{
      //      background: "rgb(93,207,252)",
      //      background:
      //        "radial-gradient(circle, rgba(93,207,252,1) 35%, rgba(2,150,209,1) 100%)",
      //    }}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-primaryDark text-lg">
            What we provide
          </p>
          <p className="w-16 h-1 border border-primaryDark bg-primaryDark rounded-xl"></p>
        </div>
        <p className="font-semibold text-5xl leading-[60px]">
          We will help you to
          <br />
          start stock market <br /> exchange
        </p>
        <p>
          Centralized stock market exchanges act as an intermediary <br />{" "}
          between a buyer and a seller and make
        </p>
        <button className="rounded-full py-2 border border-primaryDark px-3">
          Buy Now
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceStrip;
