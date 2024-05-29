"use client";
import React from "react";
import { IProduct } from "../../../@types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props: IProduct) => {
  const { amount, id, image, title } = props;
  return (
    <figure key={id} className="max-w-[200px] p-5 border rounded-xl">
      <Link href={`/${id}`}>
        <div className="h-[200px]">
          <Image
            src={image}
            className="h-full w-full object-cover"
            alt={title}
          />
        </div>
        <figcaption className="space-y-3 mt-5">
          <p>{title}</p>
          <p>{amount}</p>
          <p>View Details</p>
        </figcaption>
      </Link>
    </figure>
  );
};

export default ProductCard;
