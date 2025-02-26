'use client';
import React from "react";
import {GoArrowRight} from 'react-icons/go';


interface MapButtonProps {
  onClick: () => void;
}

// 画像付きのボタン
export default function MapButton(props: MapButtonProps) {
  return (
      <button className='w-1/2  p-6 mx-auto flex justify-center items-center gap-4 bg-main-3 rounded-full shadow-lg shadow-sub' onClick={props.onClick}>
          <div className='text-sub text-body-2 font-bold break-all'>マップへ</div>
          <GoArrowRight className="w-4 h-4"/>
      </button>
  );
}