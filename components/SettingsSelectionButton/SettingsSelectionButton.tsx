'use client';
import React from "react";

interface SettingsSelectionButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

// 詳細設定の選択ボタン
export default function SettingsSelectionButton(props: SettingsSelectionButtonProps) {
  const buttonClassName = 'px-3 py-2 rounded-full shadow-md shadow-sub'+ 
    (props.isSelected ? ' bg-main-2' : ' bg-base');
  const textClassName = 'text-label-1' +
    (props.isSelected ? ' text-text-light' : ' text-text-dark');
  return (
      <button className={buttonClassName} onClick={props.onClick}>
          <div className={textClassName}>{props.label}</div>
      </button>
  );
}