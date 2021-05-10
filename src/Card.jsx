import * as React from 'react'
import './Card.css'

export default ({ Heading, Text, isSelected }) => {
  return (
    <section className="Card">
      <h2 className="CardHeading">{Heading}</h2>
      <p className="CardText">{Text}</p>
      <div
        className={isSelected ? 'CardBookmark selected' : 'CardBookmark'}
      ></div>
    </section>
  )
}
