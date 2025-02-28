'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import QuestionBox from "../QuestionBox/QuestionBox";
import AnswerButton from "../AnswerButton/AnswerButton";
import AnswerProgressBar from "../AnswerProgressBar/AnswerProgressBar";

export default function Question() {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>([]); // 回答リスト
  const [questionIndex, setQuestionIndex] = useState(0); // 現在の質問のインデックス
  const [selectedValues, setSelectedValues] = useState<{ [key: string]: string | null }>({}); // 詳細設定の選択状態
  const questionAndAnswers: { [key: string]: string[] } = { // 質問と回答のリスト
    '質問1': ['回答1-1', '回答1-2'],
    '質問2': ['回答2-1', '回答2-2'],
    '質問3': ['回答3-1', '回答3-2'],
    '質問4': ['回答4-1', '回答4-2'],
    '質問5': ['回答5-1', '回答5-2'],
  };
  const questions = Object.keys(questionAndAnswers); // 質問のリスト
  
  // 結果ページをプリフェッチしておく
  useEffect(() => {
    router.prefetch("/pages/ResultPage");
  }, []);
  
  // 詳細設定の選択状態の初期化 (Cookieから読み取り)
  useEffect(() => {
    const initialValues: { [key: string]: string | null } = {};
    const detailedSettingQuestions = ['おすすめ結果のお店の数', 'お店までの所要時間', '移動手段', 'お店に行く人数', 'ご予算']; // layoutからQuestionPageとHeaderに渡した方がいいかも
    detailedSettingQuestions.forEach((question) => {
      const cookieValue = Cookies.get(question);
      initialValues[question] = cookieValue || null;
    });
    setSelectedValues(initialValues);
  }, []);
  
  // 回答時の処理
  const handleAnswer = (answer: string) => {
    // 回答をリストに追加し、次の質問に進む
    const newAnswers = [...answers, answer];
    const newQuestionIndex = questionIndex + 1;
    
    // 質問が最後まで行ったら結果ページに遷移
    if (newQuestionIndex >= questions.length) {
      // ここで結果ページに遷移する処理を書く
      router.push("/pages/ResultPage");
      
      // 回答リストと選択リスト
      console.log(newAnswers);
      console.log(selectedValues);
      return;
    }
    setAnswers(newAnswers);
    setQuestionIndex(newQuestionIndex);
  };
  
  return (
    <div className="h-full flex flex-col justify-between items-center ">
      <div className="w-2/3 flex items-center">
        <AnswerProgressBar value={questionIndex * 100 / questions.length}/>
        <img src="../IoBulb.svg"
          className="mx-auto"
          alt="IoBuld"
          width={24}
          height={24}/>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <img src="../bear-question.svg"
          className="mx-auto"
          alt="bear-question"
          width={88}
          height={114}/>
        <QuestionBox question={questions[questionIndex]} />
      </div>
      <div className="w-full h-1/3 flex flex-row gap-4 p-4">
        <AnswerButton 
          answer={questionAndAnswers[questions[questionIndex]][0]} 
          position="left" 
          onClick={() => handleAnswer(questionAndAnswers[questions[questionIndex]][0])}/>
        <AnswerButton 
          answer={questionAndAnswers[questions[questionIndex]][1]} 
          position="right" 
          onClick={() => handleAnswer(questionAndAnswers[questions[questionIndex]][1])}/>
      </div>
    </div>
  );
}
