import Image from "next/image"

type ShopByTopCategoriesProps={
    image:React.ReactNode,
    title:string
}
function ShopByTopCategories({image,title}:ShopByTopCategoriesProps) {
  return (
    <div className="w-[200px] h-[213px] flex flex-col gap-5 border  border-[#E5E5E5] hover:border-[#2C742F] ">
        <div className="w-[190px] h-[130px]">
           {image}
        </div>
        <div className="items-center text-center hover:text-[#2C742F]"><h3 className="text-[18px] font-semibold">{title}</h3></div>
    </div>
  )
}

export default ShopByTopCategories