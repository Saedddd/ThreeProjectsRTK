import React from "react";

import CatalogShop from "@/widgets/CatalogShop/ui/CatalogShop";

const Shopping = () => {
  return (
    <main className="w-full h-screen bg-black text-white">
      <div className="text-center py-[5rem] flex items-center gap-8 justify-center">
        Shop
      </div>
      <div className="">
        <CatalogShop />
      </div>
    </main>
  );
};

export default Shopping;
