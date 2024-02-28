import React from "react";

import Image from "next/image";
import ICardItem from "@/entities/CardItem/types";

const ItemCart = ({ img, title, id, desc, price, quantity }: ICardItem) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <p>{price}</p>
        <p>Quantity{quantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
