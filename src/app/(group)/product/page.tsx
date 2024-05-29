import ProductCard from "@/components/product/product-card";
import { products } from "@/components/product/products";
import GeneralLayout from "@/templates/general-layout";
import React from "react";

const Product = () => {
  return (
    <section>
      <GeneralLayout>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </GeneralLayout>
    </section>
  );
};

export default Product;
