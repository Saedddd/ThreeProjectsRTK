"use client";

import ItemCart from "@/entities/ItemCart";
import { useAppSelector } from "@/shared/hook/hook";
import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const [isOpenFav, setIsOpenFav] = useState<boolean>(false);

  const cards = useAppSelector((state) => state.cart.card);

  return (
    <div className="w-[70%] mx-auto">
      <ul className="absolute right-0 left-0 top-[3rem] flex items-center justify-center gap-[2rem]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
        <li>
          <Link href="/todo">Todo List</Link>
        </li>
        <li>
          <Link href="/shop">Shopping</Link>
        </li>

        <Button onClick={() => setIsOpenCart(true)} type="button">
          Cart
        </Button>
        <Modal isOpen={isOpenCart} onClose={() => setIsOpenCart(false)}>
          <div className="modal-actions">
            <div className="text-center">
              <h1 className="mb-10">Cart</h1>
              <div className="flex flex-wrap gap-4 justify-center">
                {cards.map((item) => (
                  <ItemCart
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>

        <Button onClick={() => setIsOpenFav(true)} type="button">
          Fav
        </Button>
        <Modal isOpen={isOpenFav} onClose={() => setIsOpenFav(false)}>
          <div className="modal-actions">
            <div className="">
              <h1>Favorite</h1>
              <div className="flex flex-col"></div>
            </div>
          </div>
        </Modal>
      </ul>
    </div>
  );
};

export default Header;
