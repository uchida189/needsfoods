import React from "react";

interface ShopNameProps {
  shopName: string;
}

// お店の名前
export default function ShopName(props: ShopNameProps) {
  return (
    <div className="w-1/2 m-1 p-auto mx-auto text-center">
      <p className='text-sub text-body-2 font-bold break-all'>{props.shopName}</p>
    </div>
  );
}