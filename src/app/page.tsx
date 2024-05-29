import ProductCard from "@/components/product/product-card";
import { products } from "@/components/product/products";
import GeneralLayout from "@/templates/general-layout";
import React from "react";

const Product = () => {
  return (
    <section className="py-10">
      <GeneralLayout>
        <p className="text-center font-bold text-xl">Products</p>
        <div className="flex md:flex-row flex-col justify-center items-center  gap-5 mt-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </GeneralLayout>
    </section>
  );
};

export default Product;
