import React from 'react'
import "./Quiz.css"
import { useState } from 'react'

export default function Quiz() {

  const quizData = [
    {
      question: "rodis moxda didgoris brdzola?",
      answers: ['1121', '3324', '531', '125'],
     
    },
    {
      question: "ra feria pepela?",
      answers: ['red', 'blue', 'gray', 'black'],
      
    },
    {
      question: "qatami tu kvercxi",
      answers: ['qatami', 'dinozavri', 'rdze', 'kvercxi'],
      
    },
    {
      question: "kaibichoba tu torti",
      answers: ['torti', 'shorti', 'porti', 'golfi'],
      
    }
  ]

const [questionIndex, setQuestionIndex] = useState(0)

const questionData = quizData[questionIndex]

const rightAnswer1 = "1121"
const rightAnswer2 = "black"
const rightAnswer3 = "dinozavri"
const rightAnswer4 = "shorti"

const checkRightAnswer = (event) => {
  const buttonText = event.target.textContent;
  if (buttonText === '1121') {
    event.target.style.backgroundColor = 'red';
  }
};

const handleNextQuestion = () => {

  if(questionIndex < quizData.length -1){
    setQuestionIndex(questionIndex + 1)
  }else{
    alert("quiz finished")
  }

}

 

  return (
    <div className='quiz'>
      <h1>aaaaaaaaa</h1>
        <div className="question">
            <div className="question-header">{questionData.question}</div>
            <div className="question-list">
            <button onClick={checkRightAnswer} className="quest answer-1">{questionData.answers[0]}   </button>
            <button onClick={checkRightAnswer} className="quest answer-2">{questionData.answers[1]}   </button>
            <button onClick={checkRightAnswer} className="quest answer-3">{questionData.answers[2]}   </button>
            <button onClick={checkRightAnswer} className="quest answer-4">{questionData.answers[3]}   </button>
            </div>
            
        </div>

        <button onClick={handleNextQuestion} className='finish'>{questionIndex < quizData.length -1 ? "Next Question" : "Finish"}</button>
    </div>
  )
}
