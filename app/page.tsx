import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";
import Apple from "../components/images/apple.png";
import Orange from "../components/images/orange.png";
import Third from "../components/images/third.png";
import Fourth from "../components/images/fourth.png";
import Fifth from "../components/images/fifth.png";
import Sixth from "../components/images/sixth.png";
import Seventh from "../components/images/seventh.png";
import Eighth from "../components/images/eigth.png";
import Nineth from "../components/images/nineth.png";
import Tenth from "../components/images/tenth.png";
import Bag from "../components/images/Bag.png";
import AddtoCart from "../components/images/Add To Cart.png";
import CustomerFeedback from "@/components/CustomerFeedback";
import profile1 from "../components/images/profil1.png";
import profile2 from "../components/images/profile2.png";
import profile3 from "../components/images/profile3.png";
import LatestNewsImg1 from "../components/images/latestnews1.png";
import LatestNewsImg2 from "../components/images/latestnews2.png";
import LatestNewsImg3 from "../components/images/latestnews3.png";

import LatestNews from "@/components/LatestNews";
function page() {
  return (
    <div>
      <div className="w-full grid   md:grid-cols-2 lg:grid-cols-5 ">
        <PopularProducts
          badge="Sale 50%"
          productimg={<Image src={Apple} alt="apple" />}
          heading="Green Apple"
          price="14.99"
          linethrough="20.99"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Orange} alt="orange" />}
          heading="Fresh Indian Maita"
          price="20.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <div className="border-[#2C742F] border shadow-[0px_0px_12px_0px_#20B52652]">
          <PopularProducts
            productimg={<Image src={Third} alt="third" />}
            heading="Chinese Cabbage "
            price="12.00"
            rating="⭐⭐⭐⭐☆"
            addtocart={<Image src={AddtoCart} alt="bag" />}
            isGreen={true}
          />
        </div>
        <PopularProducts
          productimg={<Image src={Fourth} alt="fourth" />}
          heading="Green Lettuce"
          price="9.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Fifth} alt="fifth" />}
          heading="Eggplant"
          price="34.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Sixth} alt="sixth" />}
          heading="Big Potatoes"
          price="20"
          rating="⭐⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Seventh} alt="seventh" />}
          heading="Corn"
          price="20.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Eighth} alt="eigth" />}
          heading="Fresh Cauliflower "
          price="20.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Nineth} alt="nineth" />}
          heading="Green Capsicum"
          price="9.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
        <PopularProducts
          productimg={<Image src={Tenth} alt="tenth" />}
          heading="Green Chilly"
          price="34.00"
          rating="⭐⭐⭐⭐"
          addtocart={<Image src={Bag} alt="bag" />}
        />
      </div>
      <div>
        <div className="mt-[70px] p-6 text-[30px] font-semibold">
          <p className="text-[16px] text-[#00B207] uppercase">Testimonals</p>
          <h1>What Our Customer Says</h1>
        </div>
        <div className="bg-[#F2F5F3] w-full grid gap-2 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile1} alt="profile" />}
            name="Robert Fox"
          />
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile2} alt="profile" />}
            name="Dianne Russell"
          />
          <CustomerFeedback
            desc="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
            profileimg={<Image src={profile3} alt="profile" />}
            name="Eleanor Pena"
          />
        </div>
      </div>
      <div className="w-full grid   md:grid-cols-2 lg:grid-cols-3">
        <LatestNews
          mainImage={
            <Image
              src={LatestNewsImg1}
              alt="latest news"
              fill
              style={{ objectFit: "cover" }}
            />
          }
          day="18"
          month="Nov"
        />
        <LatestNews
          mainImage={
            <Image
              src={LatestNewsImg2}
              alt="latest news"
              fill
              style={{ objectFit: "cover" }}
            />
          }
          day="23"
          month="Jan"
        />
        <LatestNews
          mainImage={
            <Image
              src={LatestNewsImg3}
              alt="latest news"
              fill
              style={{ objectFit: "cover" }}
            />
          }
          day="18"
          month="Nov"
        />
      </div>
    </div>
  );
}

export default page;