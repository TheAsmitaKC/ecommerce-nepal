import Image from "next/image";
import ShopByTopCategories from "@/components/ShopByTopCategories";
import Section from "@/components/Section";
import top1 from "@/components/images/top1.png";
import top2 from "@/components/images/top2.png";
import top3 from "@/components/images/top3.png";
import top4 from "@/components/images/top4.png";
import top5 from "@/components/images/top5.png";
import top6 from "@/components/images/top6.png";
import top7 from "@/components/images/top7.png";
import top8 from "@/components/images/top8.png";
import top9 from "@/components/images/top9.png";
import top10 from "@/components/images/top10.png";
import top11 from "@/components/images/top11.png";
import top12 from "@/components/images/top12.png";

const categories = [
  { image: top1, title: "Fresh Fruit" },
  { image: top2, title: "Fresh Vegetables" },
  { image: top3, title: "Meat & Fish" },
  { image: top4, title: "Snacks" },
  { image: top5, title: "Beverages" },
  { image: top6, title: "Beauty & Health" },
  { image: top7, title: "Bread & Bakeries" },
  { image: top8, title: "Baking Needs" },
  { image: top9, title: "Cooking" },
  { image: top10, title: "Diabetic Food" },
  { image: top11, title: "Dish Detergents" },
  { image: top12, title: "Oil" },
];

function TopCategoriesSection() {
  return (
    <Section label="Category" title="Shop by Top Categories">
      <div className="grid grid-cols-2 gap-4 items-center lg:grid-cols-6 md:grid-cols-4">
        {categories.map((category) => (
          <ShopByTopCategories
            key={category.title}
            image={<Image src={category.image} alt="" />}
            title={category.title}
          />
        ))}
      </div>
    </Section>
  );
}

export default TopCategoriesSection;
