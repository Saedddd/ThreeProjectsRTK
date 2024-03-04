import React, { use } from "react";

import Image from "next/image";
import ICardItem from "@/entities/CardItem/types";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/features/AddToCart/slice/AddToCart";

const ItemCart = ({ img, title, id, desc, price, cardQuantity }: ICardItem) => {
  const dispatch = useDispatch();

  const handlerRemoveCard = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <p>{price}</p>
        <p>Quantity: {cardQuantity}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button onClick={handlerRemoveCard} className="btn btn-primary">
            Delete
          </button>
          <button className="btn btn-primary">Сlear</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
