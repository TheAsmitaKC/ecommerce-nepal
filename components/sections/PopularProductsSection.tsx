import Image from "next/image";
import PopularProducts from "@/components/PopularProducts";
import Section from "@/components/Section";
import Apple from "@/components/images/apple.png";
import Orange from "@/components/images/orange.png";
import Third from "@/components/images/third.png";
import Fourth from "@/components/images/fourth.png";
import Fifth from "@/components/images/fifth.png";
import Sixth from "@/components/images/sixth.png";
import Seventh from "@/components/images/seventh.png";
import Eighth from "@/components/images/eigth.png";
import Nineth from "@/components/images/nineth.png";
import Tenth from "@/components/images/tenth.png";
import Bag from "@/components/images/Bag.png";
import AddtoCart from "@/components/images/Add To Cart.png";

const products = [
  {
    image: Apple,
    alt: "apple",
    heading: "Green Apple",
    price: "14.99",
    linethrough: "20.99",
    rating: "⭐⭐⭐⭐",
    badge: "Sale 50%",
  },
  {
    image: Orange,
    alt: "orange",
    heading: "Fresh Indian Maita",
    price: "20.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Third,
    alt: "third",
    heading: "Chinese Cabbage",
    price: "12.00",
    rating: "⭐⭐⭐⭐☆",
    isGreen: true,
    isActive: true,
  },
  {
    image: Fourth,
    alt: "fourth",
    heading: "Green Lettuce",
    price: "9.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Fifth,
    alt: "fifth",
    heading: "Eggplant",
    price: "34.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Sixth,
    alt: "sixth",
    heading: "Big Potatoes",
    price: "20",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    image: Seventh,
    alt: "seventh",
    heading: "Corn",
    price: "20.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Eighth,
    alt: "eigth",
    heading: "Fresh Cauliflower",
    price: "20.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Nineth,
    alt: "nineth",
    heading: "Green Capsicum",
    price: "9.00",
    rating: "⭐⭐⭐⭐",
  },
  {
    image: Tenth,
    alt: "tenth",
    heading: "Green Chilly",
    price: "34.00",
    rating: "⭐⭐⭐⭐",
  },
];

function PopularProductsSection() {
  return (
    <Section label="On Sale" title="Popular Products">
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => {
          const card = (
            <PopularProducts
              key={product.alt}
              badge={product.badge}
              productimg={<Image src={product.image} alt={product.alt} />}
              heading={product.heading}
              price={product.price}
              linethrough={product.linethrough}
              rating={product.rating}
              addtocart={
                <Image
                  src={product.isActive ? AddtoCart : Bag}
                  alt="bag"
                />
              }
              isGreen={product.isGreen}
            />
          );

          if (product.isActive) {
            return (
              <div
                key={product.alt}
                className="border-[#2C742F] border shadow-[0px_0px_12px_0px_#20B52652]"
              >
                {card}
              </div>
            );
          }

          return card;
        })}
      </div>
    </Section>
  );
}

export default PopularProductsSection;
