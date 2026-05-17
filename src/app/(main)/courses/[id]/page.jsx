import Image from "next/image";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const services = await res.json();
  const service = services.find((s) => s.id == id);

  return (
    <section className="w-full bg-base-100">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT - IMAGE */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            {/* <Image
              src={
                service?.image ||
                "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              }
              alt={service?.title || "course"}
              fill
              className="object-cover"
            /> */}
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-5">
            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {service?.title}
            </h1>

            {/* INSTRUCTOR */}
            <p className="text-gray-500 text-sm sm:text-base">
              Instructor:{" "}
              <span className="font-medium">{service?.instructor}</span>
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary badge-outline">Popular</span>
              <span className="badge badge-success badge-outline">
                Certified
              </span>
              <span className="badge badge-accent badge-outline">Updated</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {service?.description}
            </p>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button className="btn bg-[#FF9500] text-white border-none rounded-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Buy Now
              </button>

              <button className="btn btn-outline rounded-xl w-full sm:w-auto">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
