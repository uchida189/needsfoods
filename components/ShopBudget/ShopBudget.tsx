import React from "react";
import { IoWallet } from "react-icons/io5";

interface ShopBudgetProps {
  budget: string;
}

// お店の名前
export default function ShopBudget(props: ShopBudgetProps) {
  return (
    <div className="w-1/2 py-3 mx-auto flex justify-center items-center gap-4 border-2 border-main-3 rounded-xl">
      <IoWallet color="#eea643"></IoWallet>
      <p className='text-text-dark text-label-2 font-normal break-all'>予算 {props.budget}円</p>
    </div>
  );
}