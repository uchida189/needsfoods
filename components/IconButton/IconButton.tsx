'use client';
import React from "react";


interface IconButtonProps {
  func: string;
  icon:string;
  onClick: () => void;
}

// 画像付きのボタン
export default function IconButton(props: IconButtonProps) {
  return (
    <button className='w-10 h-10' onClick={props.onClick}>
      <img src={props.icon}
        className="mx-auto"
        alt={props.func+"mark"}
        width={24}
        height={24}/>
      <div className='mx-auto text-text-dark text-label-2 font-bold break-all'>{props.func}</div>
    </button>
  );
}