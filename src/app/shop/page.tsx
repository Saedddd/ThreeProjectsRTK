import CatalogShop from "@/widgets/CatalogShop/ui/CatalogShop";
import React from "react";

const Shopping = () => {
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[10rem] flex items-center gap-8 justify-center">
        Shop
      </div>
      <div className="">
        <CatalogShop />
      </div>
    </main>
  );
};

export default Shopping;
