import React from "react";

interface ShopNameProps {
  shopDetail: string;
}

// お店の名前
export default function ShopDetail(props: ShopNameProps) {
  return (
    <div className="w-1/2 p-10 mx-auto">
      <p className='text-sub text-label-2 font-normal break-all'>{props.shopDetail}</p>
    </div>
  );
}