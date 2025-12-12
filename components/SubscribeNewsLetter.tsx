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
      <div className="flex bg-[#F7F7F7]  py-10 px-4 w-full justify-between">
        <div className="flex flex-col ">
          <div className="w-md">
            <h1 className="text-[24px] font-semibold">
              Subcribe our Newsletter
            </h1>
          </div>
          <div className="w-md text-[#FFFFFF]">
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
            className="w-[536px] h-[52px] bg-white pl-4  text-[#808080] rounded-[46px]"
          />
          <button className=" absolute ml-100 w-[162px] h-[52px] bg-[#00B207] rounded-[43px] text-white ">
            Subscribe
          </button>
        </div>
        <div className="flex gap-4  ">
          <div className="h-10 w-10 ">
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
      <div className="bg-black  px-4 w-full pt-10  ">
        <div className="flex justify-between w-full">
          <div className="w-[336px]">
            <div className="flex items-center gap-2 ">
              <div className="h-8 w-8 text-[32px] font-semibold">
                <Image src={plant1} alt="" />
              </div>
              <div>
                <h1 className="text-white text-[32px]">Ecobazar</h1>
              </div>
            </div>
            <div>
              <p className="text-[#808080] text-[14px]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-white shadow-[0px_1.5px_0_#20B526]">
                (219) 555-0114
              </p>

              <p className="text-[#808080] ">or</p>
              <p className="text-white shadow-[0px_1.5px_0_#20B526]">
                Proxy@gmail.com
              </p>
            </div>
          </div>
          
          <div><h3 className="text-white  ">My Account</h3>
          <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2"> <li>My Account</li>
          <li>Order History</li>
          <li className="text-[#FFFFFF]">Shopping Cart</li>
          <li>Wishlist</li></ul>
          </div>

          <div><h3 className="text-white  gap-3">Helps</h3>
           <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2"> <li>Contact</li>
          <li >Faqs</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li></ul></div>
          <div><h3 className="text-white ">Proxy</h3>
          <ul className="text-[#999999] text-[14px] flex flex-col gap-2"> <li>About</li>
          <li>Shop</li>
          <li>Product </li>
          <li>Track Order</li></ul></div>
          <div><h3 className="text-white ">Categories</h3>
        <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2"> <li>Fruit & Vegetables</li>
          <li>Meat & Fish</li>
          <li>Bread & Bakery</li>
          <li>Beauty & Health</li></ul>
          </div>
        </div>
        <hr className="mt-10" />
        <div className="flex w-full justify-between pt-4">
          <div>
            <p className="text-[#808080]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-2  h-10  ">
            <div className="h-3 w-8">
              <Image src={applepay} alt="" />
            </div>
            <div className="h-3 w-8">
              <Image src={visa} alt="" />
            </div>
            <div className="h-3 w-8">
              <Image src={discover} alt="" />
            </div>
            <div className="h-3 w-8">
              <Image src={mastercard} alt="" />
            </div>
            <div className="h-3 w-8">
              <Image src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNewsLetter;
