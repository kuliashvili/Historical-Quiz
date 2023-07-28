import React from 'react'
import "./Finished.css"

export default function Finished({ score, totalQuestions }) {
    return (
        <div className='Finished'>
          <h1>Quiz finished. Your score: {score}/{totalQuestions}</h1>
        </div>
    )
}