import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col bg-base-100 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-base-200">
        {/* IMAGE */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-grow">
          {/* TOP CONTENT */}
          <div className="space-y-3 flex-grow">
            <h2 className="text-lg md:text-xl font-semibold line-clamp-2">
              {service.title}
            </h2>

            <p className="text-sm text-gray-500">By {service.instructor}</p>

            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary badge-outline">Popular</span>
              <span className="badge badge-accent badge-outline">Updated</span>
              <span className="badge badge-success badge-outline">
                Certified
              </span>
            </div>

            <p className="text-sm text-gray-600 line-clamp-3">
              {service.description}
            </p>
          </div>

          {/* BUTTON (always bottom aligned) */}
          <div className="mt-4">
            <Link href={`/courses/${service.id}`}>
              <button className="btn btn-primary w-full rounded-xl hover:scale-105 transition-all duration-300">
                View Course
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
