'use client';
import React, { useState, useEffect } from 'react';

// スプラッシュページ
export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // スプラッシュページが表示されている間はスクロールを禁止する
    document.body.classList.add('no-scroll');

    // 1.5秒後にスプラッシュページを非表示にする
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // スプラッシュページが非表示になったらスクロールを許可する
  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove('no-scroll');
    }
  }, [isVisible]);

  const handleClick = () => {
    setIsVisible(false); // クリック/タップで非表示
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 bg-base z-50 flex justify-center items-center"
      onClick={handleClick}
      role="button" // スクリーンリーダーにボタンであることを伝える(アクセシビリティ)
      tabIndex={0}  // キーボード操作可能にする(アクセシビリティ)
      aria-label="Close splash screen"
    >
      <img className="w-46" src="/logo.svg" alt="NeedsFoods" />
    </div>
  );
}