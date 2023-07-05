import React from "react";
import { services } from "./Objects";
import Image from "next/image";

const Services = () => {
  const serviceList = services.map((service, index) => (
    <div className="service" key={index}>
      <Image
        src={service.img}
        alt={service.title}
        className="service-image"
        width={500}
        height={500}
      />
      <div className="service-body">
        <h3>{service.title}</h3>
        <p>{service.body}</p>
        <a href={service.link}>Learn More</a>
      </div>
    </div>
  ));
  return (
    <div id="services">
      <h3 style={{textAlign: 'center'}}>Take the LUMENAVE Advantage Today</h3>
      <div className="services">{serviceList}</div>
    </div>
  );
};

export default Services;
