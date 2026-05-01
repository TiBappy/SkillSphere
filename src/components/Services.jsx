import React from "react";
import ServiceCard from "./ServiceCard";

const Services = async () => {
  const res = await fetch("https://skill-sphere-teal.vercel.app/data.json");
  const services = await res.json();
  const topServices = services.slice(0, 6);
  console.log("top services", topServices);
  // console.log(data, "data");
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {topServices.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
