import React from "react";
import { partners } from "./Objects";
import Image from "next/image";

const Partners = () => {
  const partnerList = partners.map((partner, index) => (
    <div id={index} className="slider">
      <Image
        src={partner.img}
        alt=""
        width={150}
        height={80}
        className="partner_logo"
      />
    </div>
  ));

  return (
    <div id="partner">
      <div className="container-fluid p-3">
        <h6>Our Partners, Our Pride</h6>
        <div className="slider">
          <div className="slider-track">{partnerList}</div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
