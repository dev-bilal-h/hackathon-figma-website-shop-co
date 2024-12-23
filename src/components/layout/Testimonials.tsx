"use client";

import React, { useState, useEffect } from "react";
import { integralCF } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";

const Rtestimonials = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Harry Mimi.",
    review:
      "Their collection is the perfect blend of style and comfort, making it ideal for every occasion. Whether it's casual wear or something more formal, they never disappoint. Highly recommended",
  },
  {
    name: "Michael starc",
    review:
      "Shop.co has revamped my entire wardrobe! Their collection offers both style and comfort, making it easy to find the perfect outfit for any event. I absolutely recommend them to anyone looking to elevate their fashion game",
  },
  {
    name: "Ben stoke",
    review:
      "Stylish, comfortable, and versatile outfits that suit every occasion! Thanks to their amazing collection, Shop.co has completely revamped my wardrobe. Highly recommend exploring their range"
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Check for large screen
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (isLargeScreen ? 3 : 1)) % Rtestimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - (isLargeScreen ? 3 : 1) + Rtestimonials.length) %
        Rtestimonials.length
    );
  };

  const visibleTestimonials = isLargeScreen
    ? Rtestimonials.slice(currentIndex, currentIndex + 3)
    : [Rtestimonials[currentIndex]];

  {/*Wraping large screen*/}
  if (isLargeScreen && visibleTestimonials.length < 3) {
    visibleTestimonials.push(
      ...Rtestimonials.slice(0, 3 - visibleTestimonials.length)
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-14">
      {/* Heading Section */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className={cn("text-3xl font-bold text-left", integralCF.className)}
        >
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ←
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            →
          </button>
        </div>
      </div>

      {/* Cards content Section */}
      <div
        className={`flex gap-6 justify-center ${
          isLargeScreen ? "flex-row" : "flex-col"
        }`}
      >
        {visibleTestimonials.map((Rtestimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md max-w-sm w-full text-start h-64 flex flex-col justify-between"
          >
            <div className="flex items-centre justify-start">
              <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
            <div className="flex items-center justify-start">
              <p className="font-bold">{Rtestimonial.name}</p>
              <span className="ml-2 text-green-500">✔</span>
            </div>
            <p className="text-gray-600 mt-2 line-clamp-4 overflow-hidden">
              {Rtestimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;