type LatestNewsProps={
    mainImage:React.ReactNode,
    day:string,
    month:string,
}
import Image from "next/image"
import foodimg from "../components/images/Group.png"
import adminimg from "../components/images/Group (1).png"
import commentimg from "../components/images/ChatCentered 1.png"
import Arrow from "../components/images/Arrow.png"
function LatestNews({mainImage,day,month}:LatestNewsProps) {
  return (
    <div className=" flex flex-col gap-4 w-full">
        <div className=" relative w-[424px]  h-[324px]">
        {mainImage}
        <div className="absolute h-[58px] w-[58px] mt-[242px] ml-6 items-center flex flex-col bg-white text-[20px]"><div>{day}</div>
        <div className="text-[#808080] text-[20px]">{month}</div></div>
        </div>
        <div className="w-[424px] h-[170px] p-5 gap-4 flex flex-col bg-white">
            <div className="flex gap-3 ">
                <div className="flex gap-1 text-[#808080 ]"><Image src={foodimg} alt=""  className="w-5 h-5"/> <p className=" text-[#808080] ">Food</p></div>
                <div className="flex  gap-1 "><Image src={adminimg} alt=""  className="w-5 h-5"/> <p className="text-[#808080] " >My Admin</p></div>
                <div className="flex  gap-1 "><Image src={commentimg} alt=""  className="w-5 h-5"/> <p className="text-[#808080] ">65 Comments</p></div>
               
            </div>
            <div> <p className="text-[18px]">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p></div>
            <div className="flex gap-3 items-center"><div><p>Read More</p></div>
           <div><Image src={Arrow} alt=""  className="w-3 h-3"/></div> 
            </div>
        </div>
    </div>
  )
}

export default LatestNews