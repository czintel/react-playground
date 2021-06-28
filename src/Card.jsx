import * as React from 'react'
import './Card.css'

export default function Card({
  title,
  question,
  answer,
  isAnswerVisible,
  isSelected,
  id,
}) {
  const statusBookmark = isSelected
    ? 'Card__Bookmark Card_Bookmark--selected'
    : 'Card__Bookmark'
  const statusAnswer = isAnswerVisible ? 'Card__Answer' : 'Card__Answer--hidden'
  return (
    <section className="Card" id={id}>
      <h2 className="Card__Title">{title}</h2>
      <p className="Card__Question">QUESTION: {question}</p>
      <p className={statusAnswer}>ANSWER: {answer}</p>
      <div className={statusBookmark}></div>
    </section>
  )
}
