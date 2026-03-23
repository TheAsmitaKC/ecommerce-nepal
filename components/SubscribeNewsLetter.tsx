import Image from "next/image";
import facebook from "@/components/images/facebook.png";
import twitter from "@/components/images/twitter 1.png";
import pinterest from "@/components/images/pinterest 1.png";
import instagram from "@/components/images/instagram 1.png";

function SubscribeNewsLetter() {
  return (
    <div className="section_spacing">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row bg-[#F7F7F7] py-10 px-4 w-full justify-between gap-6 items-center">
          <div className="flex flex-col">
            <h1 className="text-[24px] font-semibold">
              Subscribe our Newsletter
            </h1>
            <p className="text-[#999999] max-w-md">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="relative flex">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-[200px] lg:w-[536px] h-[52px] bg-white pl-4 text-[#808080] rounded-[46px]"
            />
            <button className="absolute right-0 w-[162px] h-[52px] bg-primary rounded-[43px] text-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10">
              <Image src={facebook} alt="facebook" />
            </div>
            <div className="h-[18px] w-[18px]">
              <Image src={twitter} alt="twitter" />
            </div>
            <div className="h-[18px] w-[18px]">
              <Image src={pinterest} alt="pinterest" />
            </div>
            <div className="h-[18px] w-[18px]">
              <Image src={instagram} alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNewsLetter;
