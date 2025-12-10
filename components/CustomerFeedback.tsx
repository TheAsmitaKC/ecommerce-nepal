import Image from "next/image";
import testimonals from "./images/Vector.png";
type feedbackProps = {
  desc: string;
  profileimg: React.ReactNode;
  name: string;
};
function CustomerFeedback({ desc, profileimg, name }: feedbackProps) {
  return (
    <div className="flex flex-col w-full p-6 gap-4 rounded-lg bg-white">
      <div>
        <Image className="w-8 h-[26px]" src={testimonals} alt="testimonal " />
      </div>
      <div className="text-[14px] font-semibold  ">{desc}</div>
      <div className="flex ">
        <div className="w-14 h-14  ">{profileimg}</div>
        <div className="justify-between flex w-full">
          <div className="flex flex-col ml-2">
            <div>{name}</div>
            <div>Customer</div>
          </div>
          <div className="mt-2">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
