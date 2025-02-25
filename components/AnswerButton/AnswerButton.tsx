'use client';
import React from "react";

interface AnswerButtonProps {
  answer: string;
  position: string;
  onClick: () => void;
}

// 回答のボタン
export default function AnswerButton(props: AnswerButtonProps) {
  const className =
    'w-1/2 p-8 rounded-lg' +
    (props.position == 'right' ? ' bg-main-2' : ' bg-main-1');
  return (
    <button className={className} onClick={props.onClick}>
      <div className='text-text-light text-body-1 font-bold break-all'>{props.answer}</div>
    </button>
  );
}