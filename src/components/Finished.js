import React from 'react'
import "./Finished.css"

export default function Finished({ score, totalQuestions, restart }) {
    return (
        <div className='Finished'>
          <h1>Quiz finished. Your score: {score}/{totalQuestions}</h1>

          <button onClick={restart} >Start again</button>
        </div>
    )
}