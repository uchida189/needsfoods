import React from "react";
import { IoTime } from "react-icons/io5";

interface ShopBudgetProps {
  lunch: string;
  dinner: string;
}

// お店の名前
export default function ShopOpeningHours(props: ShopBudgetProps) {
  return (
    <div className="w-1/2 py-2 mx-auto flex justify-center items-center gap-4 border-2 border-main-3 rounded-xl">
      <IoTime color="#eea643"></IoTime>
        <div>
            <p className='text-text-dark text-label-2 font-normal break-all flex justify-center items-center gap-6'><div>ランチ</div><div>{props.lunch}</div></p>
            <p className='text-text-dark text-label-2 font-normal break-all flex justify-center items-center gap-3'><div>ディナー</div><div>{props.dinner}</div></p>
        </div>
    </div>
  );
}