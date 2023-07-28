import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Finished from './Finished';

export default function Quiz() {
  const quizData = [
    {
      question: 'The Georgian national epic, "The Knight in the Panthers Skin," was written by:',
      answers: [ ' Vazha-Pshavela', ' Ilia Chavchavadze', 'Shota Rustaveli',  'Nikoloz Baratashvili'],
      correctAnswer: 'Shota Rustaveli',
    },
    {
      question: 'Which Georgian historical figure is associated with the invention of the Georgian alphabet?',
      answers: ['Saint Nino', 'King Parnavaz', 'King Mirian III', 'King Vakhtang I Gorgasali'],
      correctAnswer: 'King Parnavaz',
    },
    {
      question: 'In which battle did King David IV (the Builder) defeat the Seljuk Turks, securing Georgian independence?',
      answers: ['Battle of Didgori', 'Battle of Martqopi', 'Battle of Lake Paravani', 'Battle of Krtsanisi'],
      correctAnswer: 'Battle of Didgori',
    },
    {
      question: 'Which Georgian king is often referred to as "George the Brilliant" due to his patronage of the arts and culture?',
      answers: [ 'Giorgi IV (Lasha)', 'George IX of Kartli', 'George II of Imereti', 'George V of Georgia'],
      correctAnswer: 'George V of Georgia',
    },
    {
      question: 'What was the name of the prominent Georgian queen who ruled in the 12th century and played a significant role in expanding Georgias territory?',
      answers: [ 'Queen Rusudan', 'Queen Tamar',' Queen Ketevan', 'Queen Marta of Margveti'],
      correctAnswer: 'Queen Tamar',
    },
    
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questionData = quizData[questionIndex];
  const [count, setCount] = useState(0)
  const [showFinish, setShowFinish] = useState(false)
  const showFinishButton = count >= 5;
  


  const handleAnswerClick = (selectedAnswer) => {
    setCount(count + 1)
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
    setShowFinish(true)
  };

  // <Finished score={score} totalQuestions={quizData.length} />

  return (
    <div className="quiz">

      {showFinish ? ( <Finished score={score} totalQuestions={quizData.length} />
      ) : ( <div>
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
      </div>)
    }
 
    </div>
  );
}
