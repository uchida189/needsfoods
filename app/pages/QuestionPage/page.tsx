import React from "react";
import Question from "@/components/Question/Question";

export default function QuestionPage() {
  return (
    <div className="content flex flex-col">
      <div className="mx-auto text-headline-1 text-main-3 font-bold">QUESTION</div>
      <Question />
    </div>
  );
}
