import * as React from 'react'
import './Card.css'

export default ({ Heading, Text, isSelected }) => {
  return (
    <section className="Card">
      <h2 className="Card__Heading">{Heading}</h2>
      <p className="Card__Text">{Text}</p>
      <div
        className={isSelected ? 'Card__Bookmark selected' : 'Card__Bookmark'}
      ></div>
    </section>
  )
}
