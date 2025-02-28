import React from "react";
import Result from "@/components/Result/Result";

export default function ResultPage() {
  return (
      <div className="content flex flex-col">
          <div className="mx-auto text-headline-1 text-main-3 font-bold">Result</div>
          <Result/>
      </div>
  );
}
