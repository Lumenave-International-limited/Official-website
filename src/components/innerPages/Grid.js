import Image from 'next/image'
import React from 'react'
import './style.css'

const Grid = ({image, title, body, className}) => {
  return (
    <div className={`row grid-row ${className}`}>
      <div className="col-6 grid-col">
        <Image
          src={image}
          alt={title}
          width={650}
          height={350}
          className="image"
        />
      </div>
      <div className="col-6 grid-col">
        <h3>{title}</h3>
        <Image
          src={image}
          alt={title}
          width={650}
          height={350}
          className="image responsive-image"
        />
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Grid