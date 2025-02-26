'use client';
import React from 'react';

interface AnswerProgressBarPops {
  value: number; // 進捗度 (0-100)
}

export default function AnswerProgressBar(props: AnswerProgressBarPops) {
  // value が 0-100 の範囲外の場合の処理
  const clampedValue = Math.max(0, Math.min(100, props.value));

  return (
    <div className={'w-full h-2.5 rounded-l-full rounded-r-xs border border-main-3 '}>
      <div
        className="bg-main-3 h-full rounded-l-full "
        style={{ width: `${clampedValue}%` }}
      ></div>
    </div>
  );
}