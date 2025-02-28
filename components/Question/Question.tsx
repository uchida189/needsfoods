'use client';
import React, {useState, useEffect} from "react";
import Cookies from "js-cookie";
import QuestionBox from "../QuestionBox/QuestionBox";
import AnswerButton from "../AnswerButton/AnswerButton";
import AnswerProgressBar from "../AnswerProgressBar/AnswerProgressBar";

export default function Question() {
  return (
    <div className="h-full flex flex-col justify-between items-center ">
      <div className="w-2/3 flex items-center">
        <AnswerProgressBar value={10}/>
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
        <QuestionBox question="質問" />
      </div>
      <div className="w-full h-1/3 flex flex-row gap-4 p-4">
        <AnswerButton answer="回答1" position="left" onClick={() => {}}/>
        <AnswerButton answer="回答2" position="right" onClick={() => {}}/>
      </div>
    </div>
  );
}
