'use client';
import React from 'react';
import SettingsQuestion from '../SettingsQuestion/SettingsQuestion';
import SettingsSelectionButton from '../SettingsSelectionButton/SettingsSelectionButton';

interface SettingsRowProps {
  question: string;
  selectedValue: string | null;
  onChange: (value: string) => void;
  options: string[]; // ラジオボタンの選択肢
}

export default function SettingsRow(props: SettingsRowProps) {
  return (
    <div className='w-full py-2 flex flex-col items-center justify-center gap-1 border-b border-dashed border-white'>
      <SettingsQuestion question={props.question} />
      <div className='w-full px-4 flex justify-between'>
        {props.options.map((option) => (
          <SettingsSelectionButton
            key={option}
            label={option}
            isSelected={props.selectedValue === option}
            onClick={() => props.onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}