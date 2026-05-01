import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  // console.log(service, "service");
  return (
    <div>
      <div className="border border-base-300">
        <div>
          {/* <Image
            src={service.image}
            width={200}
            height={200}
            alt="test"
          /> */}
        </div>
        <div>
          <p>{service.instructor}</p>
        </div>
        <div>
          <div className="badge badge-soft badge-primary">Primary</div>
          <div className="badge badge-soft badge-accent">Primary</div>
          <div className="badge badge-soft badge-success">Primary</div>
        </div>
        <div>
          <p>{service.description}</p>
        </div>
        <div>
          <Link href={`/courses/${service.id}`}><button className="btn btn-primary">View</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
