import Image from "next/image";
import Wishlist from "../components/images/Add To wishlist.png";
import eye from "../components/images/Quick View.png";

import React, { useState } from "react";
interface BestSellerProductProps {
  productimg: React.ReactNode;
  heading: string;
  price: string | number;
  rating: string | number;
  addtocart: React.ReactNode;
  addedToCartIcon: React.ReactNode;
}
function BestSellerProducts({
  productimg,
  heading,
  price,
  rating,
  addtocart,
  addedToCartIcon,
}: BestSellerProductProps) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected((prev) => !prev);
  };
  return (
    <div
      onClick={handleClick}
      className={`
        w-full h-full relative cursor-pointer
        border transition-all duration-200
        ${selected ? "border-[#20B526]" : "border-[#E6E6E6]"}
      `}
    >
      <div className=" relative flex items-center justify-center">
        {productimg}
        {selected && (
          <div className="absolute right-0 top-1 flex flex-col gap-2">
            <div className="w-10 h-[86px] flex flex-col gap-2">
              <Image src={Wishlist} alt="wishlist" />
              <Image src={eye} alt="view" />
            </div>
          </div>
        )}
      </div>
      <div className="  justify-between items-start flex px-[5%] pb-[2%]  w-full ">
        <div>
          <h3 className={"text-[14px]"}>{heading}</h3>
          <div className="flex gap-2">
            <p className=" text-[16px] font-semibold text-[#1A1A1A]">
              ${price}
            </p>
          </div>

          <p className="text-[14px]">{rating}</p>
        </div>

        <div className=" justify-end h-10 w-10 items-end flex mt-2">
          {selected ? addedToCartIcon : addtocart}
        </div>
      </div>
    </div>
  );
}

export default BestSellerProducts;
