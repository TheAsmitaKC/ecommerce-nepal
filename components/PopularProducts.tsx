import React from "react";
interface PopularProductProps {
  productimg: React.ReactNode;
  heading: string;
  price: string | number;
  rating: string | number;
  addtocart: React.ReactNode;
}
function PopularProducts({
  productimg,
  heading,
  price,
  rating,
  addtocart,
}: PopularProductProps) {
  return (
    <div className="border-amber-100 border-2 w-[264px]">
      <div className="w-full h-60  flex items-center justify-center">
        {productimg}
      </div>

      <div className="  justify-between items-start flex ">
        <div className=" flex flex-row gap-6 ">
          <div>
            <h3 className="text-[14px]">{heading}</h3>
            <p className=" text-[16px] font-bold">${price}</p>
            <p className="text-[14px]">{rating}</p>
          </div>
          <div className="flex justify-center ">
            <div className=" items-end">{addtocart}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
