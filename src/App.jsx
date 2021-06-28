import React, { useState } from 'react'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)
  const [color, setColor] = useState('#808080')

  const style = {
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
  }

  return (
    <div className="App">
      <label>
        Size:{' '}
        <input
          value={size}
          onChange={handleSizeChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Color: <input value={color} onChange={handleColorChange} type="color" />
      </label>
      <div style={style} className="Box" />
    </div>
  )
  function handleSizeChange(event) {
    const input = event.target
    setSize(input.value)
  }
  function handleColorChange(event) {
    const input = event.target
    setColor(input.value)
  }
}
