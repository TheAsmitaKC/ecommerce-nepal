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
function page() {
  return (
    <div className="grid grid-cols-5 p-0 m-0">
      <PopularProducts
        productimg={<Image src={Apple} alt="apple" />}
        heading="Green Apple"
        price="14.99"
        rating="⭐⭐⭐⭐⭐"
        addtocart={<Image src={Bag} alt="bag" />}
      />
      <PopularProducts
        productimg={<Image src={Orange} alt="orange" />}
        heading="Fresh Indian Maita"
        price="20.00"
        rating="⭐⭐⭐⭐"
        addtocart={<Image src={Bag} alt="bag" />}
      />
      <PopularProducts
        productimg={<Image src={Third} alt="third" />}
        heading="Chinese Cabbage "
        price="12.00"
        rating="⭐⭐⭐⭐"
        addtocart={<Image src={AddtoCart} alt="bag" />}
      />
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
  );
}

export default page;
