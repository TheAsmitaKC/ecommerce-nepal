import Image from "next/image";
import facebook from "../components/images/facebook.png";
import twitter from "../components/images/twitter 1.png";
import pinterest from "../components/images/pinterest 1.png";
import instagram from "../components/images/instagram 1.png";
import plant1 from "../components/images/plant 1.png";
import applepay from "../components/images/Method=ApplePay.png";
import visa from "../components/images/Method=Visa.png";
import discover from "../components/images/Method=Discover.png";
import mastercard from "../components/images/Method=Mastercard.png";
import cart from "../components/images/Cart.png";

function SubscribeNewsLetter() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row  bg-[#F7F7F7]  py-10 px-4 w-full justify-between">
        <div className="flex flex-col">
          <div className="w-md">
            <h1 className="text-[24px] font-semibold">
              Subcribe our Newsletter
            </h1>
          </div>
          <div className="lg:w-md text-[#FFFFFF]">
            <p className="text-[#999999]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
        </div>
        <div className="flex">
          <input
            type="search"
            name="email"
            id="email"
            placeholder="Your email address"
            className=" w-[200px] lg:w-[536px] h-[52px] bg-white pl-4  text-[#808080] rounded-[46px]"
          />
          <button className=" absolute ml-45 p-1 lg:ml-100 w-[162px] h-[52px] bg-[#00B207] rounded-[43px] text-white ">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10">
            <Image src={facebook} alt="" />
          </div>
          <div className="h-[18px] w-[18px] pt-2">
            <Image src={twitter} alt="" />
          </div>
          <div className="h-[18px] w-[18px] pt-2">
            <Image src={pinterest} alt="" />
          </div>
          <div className="h-[18px] w-[18px] pt-2">
            <Image src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNewsLetter;
