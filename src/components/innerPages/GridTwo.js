import React from "react";
import './style.css'

const GridTwo = ({ title, list, titleTwo, listTwo, titleThree, listThree }) => {
  // const arrList = arrs.map((arr) => (
  //     <ul>
  //         <li>{arr}</li>
  //     </ul>
  // ))
  return (
    <>
      <div className="row grid-row">
        <div className="col-4">
          <h5>{title}</h5>
          {list.map((arr) => {
            return (
              <ul>
                <li>{arr}</li>
              </ul>
            );
          })}
        </div>
        <div className="col-4">
          <h5>{titleTwo}</h5>
          {listTwo.map((arr) => {
            return (
              <ul>
                <li>{arr}</li>
              </ul>
            );
          })}
        </div>
        <div className="col-4">
          <h5>{titleThree}</h5>
          {listThree.map((arr) => {
            return (
              <ul>
                <li>{arr}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridTwo;
