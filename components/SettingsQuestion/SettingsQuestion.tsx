import React from "react";

interface SettingsQuestionProps {
  question: string;
}

// お店の名前
export default function SettingsQuestion(props: SettingsQuestionProps) {
  return (
    <div className="m-1/2 p-4 mx-auto">
      <p className='text-sub text-label-1 font-bold break-all'>{props.question}</p>
    </div>
  );
}