import React from 'react'
import "./Quiz.css"

export default function Quiz() {
  return (
    <div className='quiz'>
        <div className="question">
            <div className="question-header">romel wels moxda didgori</div>
            <div className="question-list">
            <button className="quest answer-1">1121</button>
            <button className="quest answer-2">1135</button>
            <button className="quest answer-3">456</button>
            <button className="quest answer-4">1907</button>
            </div>
            
        </div>

        <button className='finish'>next question</button>
    </div>
  )
}
