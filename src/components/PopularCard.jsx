import Image from "next/image";
import React from "react";

const PopularCard = ({ popular }) => {
  // console.log(popular);
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-lg border border-base-300">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{popular.title}</h2>
            <p>
             {popular.instructor}
            </p>
            <p>{popular.rating}</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
