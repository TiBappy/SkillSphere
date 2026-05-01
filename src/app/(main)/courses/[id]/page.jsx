import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://skill-sphere-teal.vercel.app/data.json");
  const services = await res.json();
  const service = services.find((s) => s.id == id);
  console.log(service, "service");

  return (
    <div className="py-10">
      <div className="card bg-base-100 shadow-lg ">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service?.title}</h2>
          <p>
            {service?.description}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
