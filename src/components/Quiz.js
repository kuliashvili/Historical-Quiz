import React from 'react'
import "./Quiz.css"

export default function Quiz() {
  return (
    <div className='quiz'>
        <div className="question">
            <div className="question-header">romel wels moxda didgori</div>
            <button className="question-answer-1">1121</button>
            <button className="question-answer-2">1135</button>
            <button className="question-answer-3">456</button>
            <button className="question-answer-4">1907</button>
        </div>

        <button className='finish'>finish quiz</button>
    </div>
  )
}
