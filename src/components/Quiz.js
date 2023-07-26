import React from 'react'
import "./Quiz.css"
import { useState } from 'react'

export default function Quiz() {

  const quizData = [
    {
      question: "rodis moxda didgoris brdzola?",
      answers: ['1121', '3324', '531', '125'],
      rightAnswer: '1121'
    },
    {
      question: "ra feria pepela?",
      answers: ['red', 'blue', 'gray', 'black'],
      rightAnswer: 'black'
    },
    {
      question: "qatami tu kvercxi",
      answers: ['qatami', 'dinozavri', 'rdze', 'kvercxi'],
      rightAnswer: 'dinozavri'
    },
    {
      question: "kaibichoba tu torti",
      answers: ['torti', 'shorti', 'porti', 'golfi'],
      rightAnswer: 'shorti'
    }
  ]

const [questionIndex, setQuestionIndex] = useState(0)

const questionData = quizData[questionIndex]

 

  return (
    <div className='quiz'>
        <div className="question">
            <div className="question-header">{questionData.question}</div>
            <div className="question-list">
            <button className="quest answer-1">{questionData.answers[1]}</button>
            <button className="quest answer-2">{questionData.rightAnswer}</button>
            <button className="quest answer-3">{questionData.answers[2]}</button>
            <button className="quest answer-4">{questionData.answers[3]}</button>
            </div>
            
        </div>

        <button className='finish'>next question</button>
    </div>
  )
}
