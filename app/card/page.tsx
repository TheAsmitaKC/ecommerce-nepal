import { Star } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <ProductCard
        title="Product 1"
        currentPrice={100}
        rating={4.9}
        handleAddToCart={() => {}}
        sale="10% off"
        oldPrice={120}
      />
    </div>
  );
};

export default page;

interface ProductCardProps {
  title: string;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
  handleAddToCart: () => void;
  sale?: string;
}

const ProductCard = ({
  title,
  currentPrice,
  oldPrice,
  rating,
  handleAddToCart,
  sale,
}: ProductCardProps) => {
  const intRating = Math.ceil(rating) || 0;
  return (
    <article>
      <div>
        Image
        {sale && (
          <div className="px-1 py-2 text-white bg-red-900 w-fit">{sale}</div>
        )}
      </div>
      <div className="p-4">
        <h4>{title}</h4>
        <div>
          {/* new price */}
          <p>{currentPrice}</p>
          {/* old price */}
          {oldPrice && <p>{oldPrice}</p>}
        </div>

        {/* rating */}
        <div className="flex gap-1">
          {Array(5)
            .fill(null)
            .map((star, index) => (
              <Star
                key={index}
                fill={index < intRating ? "#FF8A00" : "#E6E6E6"}
                stroke={index < intRating ? "#FF8A00" : "#E6E6E6"}
              />
            ))}
        </div>
      </div>
    </article>
  );
};
