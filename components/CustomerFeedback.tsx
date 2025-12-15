import Image from "next/image";
import testimonals from "./images/Vector.png";
type feedbackProps = {
  desc: string;
  profileimg: React.ReactNode;
  name: string;
};
function CustomerFeedback({ desc, profileimg, name }: feedbackProps) {
  return (
    <div className="flex flex-col gap-4 p-6 w-full bg-white">
      <div>
        <Image src={testimonals} alt="testimonal" width={32} height={26} />
      </div>
      <div className="text-[14px]">{desc}</div>
      <div className="flex">
        <div className="size-14">{profileimg}</div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col ml-2">
            <div className="font-medium">{name}</div>
            <div className="text-[#999999]">Customer</div>
          </div>
          <div className="mt-2">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerFeedback;
