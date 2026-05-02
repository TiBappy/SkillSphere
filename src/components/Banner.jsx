import React from "react";

const Banner = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-[#FF9500]">Unlock</span> Your Creative Potential
        </h1>

        {/* SUBTEXT */}
        <div className="mt-6 space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            with Online Design and Development Courses.
          </p>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Learn from industry experts and enhance your skills with hands-on projects and real-world experience.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button className="btn bg-[#FF9500] text-white border-none px-6 rounded-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Explore Courses
          </button>

          <button className="btn btn-outline px-6 rounded-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            View Prices
          </button>

        </div>

      </div>
    </section>
  );
};

export default Banner;