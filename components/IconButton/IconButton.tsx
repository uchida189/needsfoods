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
    <button className='w-40  p-10' onClick={props.onClick}>
      <img src={props.icon}
             className="mx-auto"
             alt={props.func+"mark"}
             width={20}
             height={20}></img>
      <div className='mx-auto text-sub text-label-2 font-bold break-all'>{props.func}</div>
    </button>
  );
}