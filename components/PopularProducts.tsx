import React from "react";
interface PopularProductProps {
  productimg: React.ReactNode;
  heading: string;
  price: string | number;
  rating: string | number;
  addtocart: React.ReactNode;
  badge?: string;
  linethrough?: string;
  isGreen?: boolean;
}
function PopularProducts({
  productimg,
  heading,
  price,
  rating,
  addtocart,
  badge,
  linethrough,
  isGreen,
}: PopularProductProps) {
  return (
    <div className=" border-[#E6E6E6] border w-full relative h-full ">
      {badge && (
        <div className=" absolute bg-[#EA4B48] w-21 text-white ml-5 mt-4 rounded-sm  h-[27px] py-[3px] px-2">
          {badge}
        </div>
      )}
      <div className=" flex items-center justify-center">
        {productimg}
      </div>

      <div className="  justify-between items-start flex px-[5%] pb-[2%]  w-full ">
        <div>
          <h3
            className={`text-[14px]  ${
              isGreen ? "text-[#2C742F]" : "text-[#4D4D4D]"
            }`}
          >
            {heading}
          </h3>
          <div className="flex gap-2">
            {" "}
            <p className=" text-[16px] font-semibold text-[#1A1A1A]">
              ${price}
            </p>
            {linethrough && (
              <p className=" line-through text-[16px]  text-[#999999]">
                ${linethrough}
              </p>
            )}{" "}
          </div>

          <p className="text-[14px]">{rating}</p>
        </div>

        <div className=" justify-end h-10 w-10 items-end flex mt-2">
          {addtocart}
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
