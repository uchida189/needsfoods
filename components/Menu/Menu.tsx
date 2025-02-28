'use client';
import React from 'react';
import SettingsRow from '../SettingsRow/SettingsRow';

interface MenuProps {
  selectedValues: { [key: string]: string | null };
  questionsAndOptions: { [key: string]: string[] };
  onChange: (question: string, selectedValue: string) => void;
}


export default function Menu(props: MenuProps) {
  const questions = Object.keys(props.questionsAndOptions);
  
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      {questions.map((question) => (
        <SettingsRow
          key={question}
          question={question}
          selectedValue={props.selectedValues[question] || null}
          onChange={(value) => props.onChange(question, value)}
          options={props.questionsAndOptions[question]}
        />
      ))}
    </div>
  );
}
