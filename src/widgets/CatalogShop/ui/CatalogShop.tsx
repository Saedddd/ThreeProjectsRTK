import CardItem from "@/entities/CardItem";

import React from "react";

const CatalogShop = () => {
  const data = [
    {
      id: "1",
      title: "Samsung Galaxy A51",
      price: 350,
      img: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "2",
      title: "Samsung Galaxy A12",
      price: 150,
      img: "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: "3",
      title: "Samsung Galaxy S21",
      price: 450,
      img: "https://kontakt.az/wp-content/uploads/2022/01/Samsung-Galaxy-S21FE-5G-6128GB-SM-G990-Gray.png",
      desc: "lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div>
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
