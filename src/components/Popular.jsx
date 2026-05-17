import React from "react";
import PopularCard from "./PopularCard";

const Popular = async () => {
  // const res = await fetch("https://skill-sphere-teal.vercel.app/popular.json");
  const res = await fetch("https://skill-sphere-teal.vercel.app/popular.json", {
    cache: "no-store",
  });
  const populars = await res.json();
  // console.log("popular", popular);
  return (
    <div>
      <div>
        <div className="text-center mb-8 pb-3">
          <p className="text-3xl font-semibold">
            <span className="text-[#FF9500]">Popular</span> Courses
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {populars.map((popular) => (
            <PopularCard key={popular.id} popular={popular}></PopularCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
