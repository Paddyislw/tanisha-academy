import { layout } from "@/utils/ClassNames";
import React from "react";

const NavBar = () => {
  return (
    <div className={`flex justify-between w-full h-[80px] items-center border-b shadow-2xl ${layout}`}>
      <div className="cursor-pointer">
        <p>Logo</p>
      </div>
      <div className="flex space-x-4 cursor-pointer">
        {NavItems.map(
          (item, index) => index !== 4 && <p key={index}>{item.label}</p>
        )}
      </div>
      <div className="cursor-pointer">
        <p>{NavItems[4].label}</p>
      </div>
    </div>
  );
};

export default NavBar;

const NavItems = [
  { label: "Home", link: "" },
  { label: "Services", link: "" },
  { label: "Performance", link: "" },
  { label: "About Us", link: "" },
  { label: "Contact Us", link: "" },
];
