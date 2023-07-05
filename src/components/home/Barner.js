import React from "react";
import { MdOutlineDns, MdOutlineSchool, MdOutlinePersonSearch, MdOutlineStore, MdEditNote, MdSupportAgent } from "react-icons/md";

const Barner = () => {
  return (
    <div>
      <section id="barner">
        <div class="row pt-3">
          <div class="col-2">
            <MdOutlineDns size={50} />
            <p>ICT Guides</p>
          </div>
          <div class="col-2">
            <MdOutlineSchool size={50} />
            <p>Training</p>
          </div>
          <div class="col-2">
            <MdOutlinePersonSearch size={50} />
            <p>Careers</p>
          </div>
          <div class="col-2">
            <MdOutlineStore size={50} />
            <p>Store</p>
          </div>
          <div class="col-2">
            <MdEditNote size={50} />
            <p>Blog</p>
          </div>
          <div class="col-2">
            <MdSupportAgent size={50} />
            <p>Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barner;
