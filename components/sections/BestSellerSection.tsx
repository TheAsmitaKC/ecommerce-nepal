"use client";

import Image from "next/image";
import BestSellerProducts from "@/components/BestSellerProducts";
import Section from "@/components/Section";
import Apple from "@/components/images/apple.png";
import Third from "@/components/images/third.png";
import Fourth from "@/components/images/fourth.png";
import Seventh from "@/components/images/seventh.png";
import Tenth from "@/components/images/tenth.png";
import Bag from "@/components/images/Bag.png";
import AddtoCart from "@/components/images/Add To Cart.png";

const bestSellers = [
  { image: Apple, alt: "apple", heading: "Green Apple", price: "14.99", rating: "⭐⭐⭐⭐" },
  { image: Third, alt: "third", heading: "Chinese Cabbage", price: "12.00", rating: "⭐⭐⭐⭐☆" },
  { image: Fourth, alt: "fourth", heading: "Green Lettuce", price: "9.00", rating: "⭐⭐⭐⭐" },
  { image: Tenth, alt: "tenth", heading: "Green Chilly", price: "34.00", rating: "⭐⭐⭐⭐" },
  { image: Seventh, alt: "seventh", heading: "Corn", price: "20.00", rating: "⭐⭐⭐⭐" },
];

function BestSellerSection() {
  return (
    <Section label="Best Deals" title="Best Seller Products">
      <div className="grid grid-cols-1 gap-3 items-center lg:grid-cols-5">
        {bestSellers.map((product) => (
          <BestSellerProducts
            key={product.alt}
            productimg={<Image src={product.image} alt={product.alt} />}
            heading={product.heading}
            price={product.price}
            rating={product.rating}
            addtocart={<Image src={Bag} alt="bag" />}
            addedToCartIcon={<Image src={AddtoCart} alt="bag" />}
          />
        ))}
      </div>
    </Section>
  );
}

export default BestSellerSection;
