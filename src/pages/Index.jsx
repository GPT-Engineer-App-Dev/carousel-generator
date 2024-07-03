import React from "react";
import Carousel from "@/components/Carousel";

const items = [
  { src: "/placeholder.svg?w=800&h=400", alt: "Placeholder 1" },
  { src: "/placeholder.svg?w=800&h=400", alt: "Placeholder 2" },
  { src: "/placeholder.svg?w=800&h=400", alt: "Placeholder 3" },
];

const Index = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel items={items} />
    </div>
  );
};

export default Index;