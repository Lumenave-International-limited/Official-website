import React from "react";
import { solutions } from "./Objects";
import Image from "next/image";

const Solution = () => {
  const solutionLists = solutions.map((solution, index) => (
    <div id="solutions">
      <div className="row" id={index}>
        <div className="col-6">
          <Image
            src={solution.img}
            alt={solution.title}
            width={1000}
            height={1000}
            className="solution-image"
          />
        </div>
        <div className="col-6 write-up">
          <h3>{solution.title}</h3>
          <p>{solution.body}</p>
          <a href={solution.buttonLink} className="btn">{solution.buttonText}</a>
        </div>
      </div>
    </div>
  ));
  return <div id="solution-home">{solutionLists}</div>;
};

export default Solution;
