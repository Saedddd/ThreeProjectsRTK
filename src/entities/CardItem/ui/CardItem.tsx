import React from "react";

import ICardItem from "../types";
import { addToCart } from "@/features/AddToCart/slice/AddToCart";

import Image from "next/image";
import { useDispatch } from "react-redux";

const CardItem = ({ id, title, img, desc, price, cardQuantity }: ICardItem) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        img,
        desc,
        price,
        cardQuantity,
      })
    );
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        {/* <Image src={img} width={200} height={12} alt="Shoes" /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <p>{price}$</p>
        <div className="flex card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to cart
          </button>
          <button className="btn btn-primary">Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
