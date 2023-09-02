import { layout } from "@/utils/ClassNames";
import SEBI from "../../utils/svg/SEBI.svg";
import Experience from '../../utils/svg/Experience.svg'
import React from "react";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className={`mt-20 ${layout} flex justify-center space-x-20`}>
      <div className="grid grid-cols-2 w-fit gap-6">
        {cardData.map((item, index) => (
          <Card key={item.index} {...item} />
        ))}
      </div>
      <div className="space-y-4 ">
        <div className="flex items-center space-x-2">
          <p className="font-semibold text-primaryDark text-lg">
            Exchange platform
          </p>
          <p className="w-16 h-1 border border-primaryDark bg-primaryDark rounded-xl"></p>
        </div>
        <p className="font-semibold text-5xl leading-[60px]">
          Most Trusted and <br /> Secure Exchange <br /> platform
        </p>
        <p>
          Centrailized cryptocurrency act as an intermediary <br /> between a
          buyer and a seller an make
        </p>
        <p>Money through commmissions and transaction fees</p>
        <button className="rounded-full py-2 border border-primaryDark px-3">
          Explore More
        </button>
      </div>
    </div>
  );
};

const Card = ({ icon, title, des, color, index, iconColor }) => (
  <div
    className={`space-y-3 w-[300px] px-4 py-10 rounded`}
    style={{
      background: color,
      justifySelf: index % 2 === 0 ? "end" : "start",
    }}
  >
    <div
      className="w-20 h-20 rounded-full mx-auto flex justify-center items-center shadow-2xl"
      style={{ background: iconColor }}
    >
      <Image src={icon} alt="" className="w-7" />
    </div>
    <p className="text-center text-lg font-semibold">{title}</p>
    <p className="text-center">{des}</p>
  </div>
);

const cardData = [
  {
    index: 0,
    title: "Secure Transaction",
    des: "A secured tansaction in which a security intrested is created",
    color: "#fef4eb",
    iconColor: "#fe6027",
    icon: SEBI,
    alt:'Icon by UIcons'
  },
  {
    index: 1,
    title: "SEBI Registered",
    des: "A secured tansaction in which a security intrested is created",
    color: "#fbeeff",
    iconColor: " #923efe",
    icon: SEBI,
    alt:'Icon by UIcons'
  },
  {
    index: 2,
    title: "10+ Years of Experience",
    des: "A secured tansaction in which a security intrested is created",
    color: "#fef1f6",
    iconColor: "#ff489c",
    icon: Experience,
    alt:'Icon by UIcons'
  },
  {
    index: 3,
    title: "Trusted platform",
    des: "A secured tansaction in which a security intrested is created",
    color: "#ebf9ff",
    iconColor: "#5c67ff",
    icon: SEBI,
    alt:'Icon by UIcons'
  },
];

export default FeaturesSection;
