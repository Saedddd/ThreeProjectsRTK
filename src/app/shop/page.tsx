import React from "react";

import CatalogShop from "@/widgets/CatalogShop/ui/CatalogShop";
import { ToastContainer } from "react-toastify";

const Shopping = () => {
  return (
    <main className="w-full h-screen bg-black text-white mt-8">
      <div className="text-center py-[5rem] flex items-center gap-8 justify-center">
        Shop
      </div>
      <div className="">
        <CatalogShop />
      </div>
      
      <ToastContainer />
    </main>
  );
};

export default Shopping;
