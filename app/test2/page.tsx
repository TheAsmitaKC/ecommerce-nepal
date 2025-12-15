import React from "react";
import { Star } from "lucide-react";

const page = () => {
  return (
    <div className="flex">
      {Array(2)
        .fill(null)
        .map((star) => (
          <Star fill="#FF8A00" stroke="#FF8A00" />
        ))}
    </div>
  );
};

export default page;
