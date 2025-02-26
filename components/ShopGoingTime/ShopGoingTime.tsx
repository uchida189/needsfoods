import React from "react";
import { IoFootsteps } from "react-icons/io5";

interface ShopGoingTimeProps {
  transportation: string;
  goingtime: string;
}

// お店の名前
export default function ShopGoingTime(props: ShopGoingTimeProps) {
  return (
    <div className="w-1/3 py-3 mx-auto flex justify-center items-center gap-4 border-2 border-main-3 rounded-xl">
      <IoFootsteps color="#eea643"></IoFootsteps>
      <p className='text-text-dark text-label-2 font-normal break-all'>{props.transportation}で{props.goingtime}分</p>
    </div>
  );
}