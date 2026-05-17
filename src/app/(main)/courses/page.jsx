import ServiceCard from "@/components/ServiceCard";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });
  const services = await res.json();
  // console.log("courses", courses);
  return (
    <div className="py-10">
      <div className="">
        <h1 className="text-3xl font-bold text-center text-[#FF9500] mb-10">
          Our Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
