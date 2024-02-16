"use client";

import CardItem from "@/entities/CardItem";

import React from "react";

import image from "@/shared/assets/12.jpg";

import { useGetAllProductsQuery } from "@/shared/api/apiCardSlice";

const CatalogShop = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="flex justify-center gap-12">
      {error ? (
        <h1>Error</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        data.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            desc={item.desc}
            img={item.img}
          />
        ))
      ) : null}
    </div>
  );
};

export default CatalogShop;
