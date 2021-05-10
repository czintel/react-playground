import * as React from 'react'
import './Button.css'
import './Pagination.css'

export default ({ children, isActive }) => {
  return (
    <button className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
