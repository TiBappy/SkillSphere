import Image from "next/image";
import React from "react";

const PopularCard = ({ popular }) => {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-200 rounded-2xl overflow-hidden group">
        
        {/* IMAGE */}
        <figure className="relative w-full h-52 overflow-hidden">
          <Image
            src={popular.image}
            alt={popular.title}
            height={400}
            width={500}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </figure>

        {/* CONTENT */}
        <div className="card-body px-5 py-4 text-center">
          
          {/* TITLE */}
          <h2 className="text-lg md:text-xl font-semibold line-clamp-2">
            {popular.title}
          </h2>

          {/* INSTRUCTOR */}
          <p className="text-sm text-gray-500">
            {popular.instructor}
          </p>

          {/* RATING */}
          <div className="flex justify-center items-center gap-1 mt-1">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-sm font-medium">{popular.rating}</span>
          </div>

          {/* BUTTON */}
          <div className="mt-4">
            <button className="btn btn-primary w-full rounded-xl transition-all duration-300 hover:scale-105">
              View Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PopularCard;