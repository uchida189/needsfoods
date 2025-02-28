'use client';
import React from "react";
import { useState, useEffect } from "react";

// ローディング画面
export default function Loading() {
  const [isEyeClosing, setIsEyeClosing] = useState(false);
  
  useEffect(() => {
    // ローディング画面が表示されている間はスクロールを禁止する
    document.body.classList.add('no-scroll'); // globals.cssで定義したno-scrollクラスを追加
    
    // 1.5秒ごとに画像を切り替える
    const intervalId = setInterval(() => {
      setIsEyeClosing((prev) => !prev);
    }, 1500);
    
    return () => {
      clearInterval(intervalId);
      // ローディング画面が非表示になったらスクロールを許可する
      document.body.classList.remove('no-scroll');
    };
  }, []);
  
  return <div className="absolute inset-0 bg-base z-50 flex flex-col justify-center items-center">
    <p className="text-center text-label-1 text-text-dark">
      now loading...
    </p>
    <img className="w-16" src={isEyeClosing ? "/loading-eye-closing.svg" : "/loading-eye-opening.svg"} alt="loading" />
  </div>;
}