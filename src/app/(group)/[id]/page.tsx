import { products } from "@/components/product/products";
import GeneralLayout from "@/templates/general-layout";
import Image from "next/image";
import React from "react";

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = products.find((product) => product.id === Number(id));
  return (
    <article className="py-5">
      <GeneralLayout>
        <div className="flex lg:flex-row flex-col items-center gap-10">
          <div className="max-w-[400px] mx-auto h-[500px]">
            <Image
              className="bg-cover w-full h-full"
              src={product?.image ?? ""}
              alt={product?.title ?? ""}
            />
          </div>
          <div className="flex-1">
            <p className="text-3xl font-bold">{product?.title}</p>

            <div
              className="pt-10 "
              dangerouslySetInnerHTML={{ __html: product?.description ?? "" }}
            />
            <p className="mt-10 font-bold">
              Price: <span>{product?.amount}</span>{" "}
            </p>
          </div>
        </div>
      </GeneralLayout>
    </article>
  );
};

export default ProductDetails;
