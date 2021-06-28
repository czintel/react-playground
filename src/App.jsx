import * as React from 'react'
import Card from './Card'
import './App.css'

const quizData = [
  {
    title: 'One big fat title!',
    question: 'Was ist grün, frisch und klopft an deiner Tür?',
    answer: 'Ein Klopfsalat',
    isAnswerVisible: false,
    isSelected: false,
    tags: ['gesund', 'langweilig', 'für Nager geeignet'],
    id: '1',
  },
  {
    title: 'Wow, another big fat title!',
    question: 'Was ist gelb, laut und lebensgefährlich?',
    answer: 'Eine Banone',
    isAnswerVisible: true,
    isSelected: true,
    tags: ['gesund', 'krumm', 'süß'],
    id: '2',
  },
]

export default () => {
  return (
    <div className="App">
      {quizData.map(
        ({
          title,
          question,
          answer,
          isAnswerVisible,
          isSelected,
          id,
          tags,
        }) => (
          <Card
            title={title}
            question={question}
            answer={answer}
            isAnswerVisible={isAnswerVisible}
            isSelected={isSelected}
            id={id}
            tags={tags}
          ></Card>
        )
      )}
    </div>
  )
}
