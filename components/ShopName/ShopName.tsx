import React from "react";

interface ShopNameProps {
  shopName: string;
}

// お店の名前
export default function ShopName(props: ShopNameProps) {
  return (
    <div className="m-1/2 p-10 mx-auto">
      <p className='text-sub text-body-2 font-bold break-all'>{props.shopName}</p>
    </div>
  );
}