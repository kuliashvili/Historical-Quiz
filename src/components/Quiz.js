import React, { useState, useEffect } from "react";
import "./Quiz.css";
import Finished from "./Finished";

import background from "../assets/backgr.png"


export default function Quiz() {
  const quizData = [
    {
      question:
        'The Georgian national epic, "The Knight in the Panthers Skin," was written by:',
      answers: [
        " Vazha-Pshavela",
        " Ilia Chavchavadze",
        "Shota Rustaveli",
        "Nikoloz Baratashvili",
      ],
      correctAnswer: "Shota Rustaveli",
    },
    {
      question:
        "Which Georgian  is associated with the invention of the Georgian alphabet?",
      answers: [
        "Saint Nino",
        "King Parnavaz",
        "King Mirian III",
        "King Vakhtang I Gorgasali",
      ],
      correctAnswer: "King Parnavaz",
    },
    {
      question:
        "In which battle did King David IV defeat the Turks, securing Georgian independence?",
      answers: [
        "Battle of Didgori",
        "Battle of Martqopi",
        "Battle of Lake Paravani",
        "Battle of Krtsanisi",
      ],
      correctAnswer: "Battle of Didgori",
    },
    {
      question:
        'Which Georgian king is referred to as "The Brilliant" due to his patronage of the culture?',
      answers: [
        "Giorgi IV (Lasha)",
        "George IX of Kartli",
        "George II of Imereti",
        "George V of Georgia",
      ],
      correctAnswer: "George V of Georgia",
    },
    {
      question:
        "Georgian queen who ruled in the 12th century and played a big role in expanding territorys?",
      answers: [
        "Queen Rusudan",
        "Queen Tamar",
        " Queen Ketevan",
        "Queen Marta of Margveti",
      ],
      correctAnswer: "Queen Tamar",
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questionData = quizData[questionIndex];
  const [count, setCount] = useState(0);
  const [showFinish, setShowFinish] = useState(false);
  const showFinishButton = count >= 5;

  const handleAnswerClick = (selectedAnswer) => {
    setCount(count + 1);
    // Check if the selected answer is correct
    if (selectedAnswer === questionData.correctAnswer) {
      // If the answer is correct, increment the score
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    if (questionIndex < quizData.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Quiz finished, display the score
    }
  };

  const handleFinishClick = () => {
    setShowFinish(true);
  };

  const restart = () => {

    setQuestionIndex(0)
    setScore(0)
    setCount(0)
    setShowFinish(false)   

  }

  // <Finished score={score} totalQuestions={quizData.length} />

  return (
    <div className="quiz">
      {showFinish ? (
        <Finished score={score} totalQuestions={quizData.length} restart = {restart}/>) : 
        
        (
        <div>
          <div className="question">
            <div className="question-header">{questionData.question}</div>
            <div className="question-list">
              {questionData.answers.map((answer, index) => (
                <button
                  key={index}
                  className="quest"
                  onClick={() => handleAnswerClick(answer)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>

          {showFinishButton && (
            <button onClick={handleFinishClick} className="finish">
              Finish
            </button>
          )}
        </div>
      )}

    </div>
  );
}
