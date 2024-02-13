import React from "react";

import ICardItem from "../types";

import Image from "next/image";

const CardItem = ({ id, title, img, desc }: ICardItem) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
