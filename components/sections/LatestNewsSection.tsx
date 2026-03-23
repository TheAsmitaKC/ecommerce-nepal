import Image from "next/image";
import LatestNews from "@/components/LatestNews";
import Section from "@/components/Section";
import LatestNewsImg1 from "@/components/images/latestnews1.png";
import LatestNewsImg2 from "@/components/images/latestnews2.png";
import LatestNewsImg3 from "@/components/images/latestnews3.png";

const newsItems = [
  { image: LatestNewsImg1, day: "18", month: "Nov" },
  { image: LatestNewsImg2, day: "23", month: "Jan" },
  { image: LatestNewsImg3, day: "18", month: "Nov" },
];

function LatestNewsSection() {
  return (
    <Section label="Blog" title="Latest News">
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <LatestNews
            key={item.day + item.month + item.image.src}
            mainImage={
              <Image
                src={item.image}
                alt="latest news"
                fill
                style={{ objectFit: "cover" }}
              />
            }
            day={item.day}
            month={item.month}
          />
        ))}
      </div>
    </Section>
  );
}

export default LatestNewsSection;
