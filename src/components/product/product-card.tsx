"use client";
import React from "react";
import { IProduct } from "../../../@types";
import Image from "next/image";
import Link from "next/link";

const ProductCard = (props: IProduct) => {
  const { amount, description, id, image, title } = props;
  return (
    <figure key={id} className="max-w-[200px] p-5 border rounded-xl">
      <Link href={`/${id}`}>
        <div className="">
          <Image src={image} alt={title} />
        </div>
        <figcaption className="space-y-5 mt-5">
          <p>{title}</p>
          <p>{amount}</p>

          <>View Details</>
        </figcaption>
      </Link>
    </figure>
  );
};

export default ProductCard;
