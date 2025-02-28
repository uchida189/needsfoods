import React from "react";


interface IconButtonProps {
  icon:string;
}

// 画像付きのボタン
export default function ShopImage(props: IconButtonProps) {
  return (
    <button className='w-1/2  p-auto mx-auto'>
      <img src={props.icon}
             className="mx-auto"
             alt={"shop image"}
      />
    </button>
  );
}