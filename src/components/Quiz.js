import React, { useState, useEffect } from 'react';
import './Quiz.css';

export default function Quiz() {
  const quizData = [
    {
      question: 'The Georgian national epic, "The Knight in the Panthers Skin," was written by:',
      answers: ['Shota Rustaveli', ' Vazha-Pshavela', ' Ilia Chavchavadze', 'Nikoloz Baratashvili'],
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
      answers: ['George V of Georgia', 'Giorgi IV (Lasha)', 'George IX of Kartli', 'George II of Imereti'],
      correctAnswer: 'George V of Georgia',
    },
    {
      question: 'What was the name of the prominent Georgian queen who ruled in the 12th century and played a significant role in expanding Georgias territory?',
      answers: ['Queen Tamar', 'Queen Rusudan', ' Queen Ketevan', 'Queen Marta of Margveti'],
      correctAnswer: 'Queen Tamar',
    },
    
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const questionData = quizData[questionIndex];

  const handleAnswerClick = (selectedAnswer) => {
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

  const show = () => {
    alert(`Quiz finished. Your score: ${score}/${quizData.length}`);
  }

  return (
    <div className="quiz">
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

 <button onClick={show} className="finish">Finish</button>
    </div>
  );
}
