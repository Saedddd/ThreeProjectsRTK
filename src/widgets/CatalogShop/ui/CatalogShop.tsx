import CardItem from "@/entities/CardItem";

import React from "react";

import image from "@/shared/assets/12.jpg";

const CatalogShop = () => {
  const data = [
    {
      id: "1",
      title: "Samsung Galaxy A51",
      price: 350,
      img: image,
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "2",
      title: "Samsung Galaxy A12",
      price: 150,
      img: image,
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "3",
      title: "Samsung Galaxy S21",
      price: 450,
      img: image,
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div className="flex justify-center gap-12">
      {data.map((data) => (
        <CardItem
          key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          desc={data.desc}
          img={data.img}
        />
      ))}
    </div>
  );
};

export default CatalogShop;
