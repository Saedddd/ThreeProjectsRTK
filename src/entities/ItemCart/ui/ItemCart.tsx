import React from "react";

import Image from "next/image";
import ICardItem from "@/entities/CardItem/types";

const ItemCart = ({ img, title, id, desc, price }: ICardItem) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <Image src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;