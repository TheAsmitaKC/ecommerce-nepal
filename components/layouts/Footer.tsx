import Image from "next/image";
import cart from "@/components/images/Cart.png";
import applepay from "@/components/images/Method=ApplePay.png";
import discover from "@/components/images/Method=Discover.png";
import mastercard from "@/components/images/Method=Mastercard.png";
import visa from "@/components/images/Method=Visa.png";
import plant1 from "@/components/images/plant 1.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full wrapper">
        {/* top component */}
        <div className="section_spacing">
          <div className="flex flex-wrap gap-10 gap-x-30">
            {/* left container */}
            <div>
              <div className="">
                <div className="flex gap-2 items-center">
                  <div className="h-8 w-8 text-[32px] font-semibold">
                    <Image src={plant1} alt="" />
                  </div>
                  <div>
                    <h1 className="text-white text-[32px]">Ecobazar</h1>
                  </div>
                </div>
                <div>
                  <p className="text-[#808080] text-[14px] w-full max-w-[36ch]">
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
            </div>

            {/* right container */}
            <div className="flex flex-wrap gap-10">
              <div>
                <h3 className="text-white">My Account</h3>
                <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2">
                  {" "}
                  <li>My Account</li>
                  <li>Order History</li>
                  <li className="text-[#FFFFFF]">Shopping Cart</li>
                  <li>Wishlist</li>
                </ul>
              </div>

              <div>
                <h3 className="gap-3 text-white">Helps</h3>
                <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2">
                  {" "}
                  <li>Contact</li>
                  <li>Faqs</li>
                  <li>Terms & Condition</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white">Proxy</h3>
                <ul className="text-[#999999] text-[14px] flex flex-col gap-2">
                  {" "}
                  <li>About</li>
                  <li>Shop</li>
                  <li>Product </li>
                  <li>Track Order</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white">Categories</h3>
                <ul className="text-[#999999] text-[14px] flex flex-col gap-2 mt-2">
                  {" "}
                  <li>Fruit & Vegetables</li>
                  <li>Meat & Fish</li>
                  <li>Bread & Bakery</li>
                  <li>Beauty & Health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="py-5" />
        <div className="flex flex-wrap gap-2 justify-between w-full">
          <div>
            <p className="text-[#808080]">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-2 h-10">
            <div className="w-8 h-3">
              <Image src={applepay} alt="" />
            </div>
            <div className="w-8 h-3">
              <Image src={visa} alt="" />
            </div>
            <div className="w-8 h-3">
              <Image src={discover} alt="" />
            </div>
            <div className="w-8 h-3">
              <Image src={mastercard} alt="" />
            </div>
            <div className="w-8 h-3">
              <Image src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
