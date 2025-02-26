'use client';
import React from "react";

interface QuestionBoxProps {
    question: string;
}

export default function QuestionBox(props: QuestionBoxProps){
    const className = 'pl-4 pr-4 pt-5 '
    return(
        <div className={className}>
            <div className='text-text-dark text-body-2 font-bold break-all'>{props.question}</div>
        </div>
    )

}

