import React from "react";

const Banner = () => {
  return (
    <div className="py-15">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="text-center">
          <p className="text-4xl font-semibold ">
            <span className="text-[#FF9500]">Unlock</span> Your Creative
            Potential
          </p>
        </div>
        <div className="text-center text-sm">
          <p className="text-2xl font-semibold mb-3">with Online Design and Development Courses.</p>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <div>
            <button className="btn bg-[#FF9500]">Explore Courses</button>
          </div>
          <div>
            <button className="btn">View Prices</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
