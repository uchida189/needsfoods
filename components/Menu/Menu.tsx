'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import SettingsRow from '../SettingsRow/SettingsRow';

export default function Menu() {
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | null }>({});
  // グループ名と選択肢
  const questionsAndOptions: { [key: string]: string[] } = {
    'おすすめ結果のお店の数': ['1店舗', '2店舗', '3店舗', '4店舗'],
    'お店までの所要時間': ['~5分', '~15分', 'それ以上'],
    '移動手段': ['徒歩', '電車・バス', '自動車'],
    'お店に行く人数': ['~2人', '~4人', '~6人', 'それ以上'],
    'ご予算': ['~500円', '~1000円', '~1500円', 'それ以上']
  };
  const questions = Object.keys(questionsAndOptions);

  // 状態の初期化 (Cookie から読み取り)
  useEffect(() => {
    const initialValues: { [key: string]: string | null } = {};
    questions.forEach((question) => {
      const cookieValue = Cookies.get(question);
      initialValues[question] = cookieValue || null; // Cookie が存在しない場合は null
    });
    setSelectedValues(initialValues);
  }, []);

  // 選択変更時の処理 (Cookie に書き込み)
  const handleChange = (question: string, value: string) => {
    // 選択済みの値の場合、選択を解除
    if (selectedValues[question] === value) {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        [question]: null,
      }));
      Cookies.remove(question, { path: '/' });
      return;
    }
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [question]: value,
    }));
    Cookies.set(question, value, { expires: 1, path: '/' }); // 1日間有効な Cookie を設定
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4">
      {questions.map((question) => (
        <SettingsRow
          key={question}
          question={question}
          selectedValue={selectedValues[question] || null}
          onChange={(value) => handleChange(question, value)}
          options={questionsAndOptions[question]}
        />
      ))}
    </div>
  );
}
