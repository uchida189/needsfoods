'use client';
import React from "react";
import {RxReload} from 'react-icons/rx';


interface MapButtonProps {
  onClick: () => void;
}

// 画像付きのボタン
export default function RemakeButton(props: MapButtonProps) {
  return (
      <button className='w-1/2  p-4 mx-auto flex justify-center items-center gap-4 bg-main-3 rounded-xl shadow-lg shadow-sub' onClick={props.onClick}>
          <div className='text-text-light text-body-2 font-bold break-all'>もう一度</div>
          <RxReload className="w-4 h-4" color="white"/>
      </button>
  );
}