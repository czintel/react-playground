import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Card from './Card'
import './App.css'

export default () => {
  return (
    <div className="App">
      <Pagination isLeftDisabled text="1/34" />
      <Pagination text="2/34" />
      <Pagination isRightDisabled text="34/34" />
      <Button isActive>Active</Button>
      <Button>Inactive</Button>
      <Card
        Heading="Title 1"
        Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
      />
      <Card
        Heading="Title 2"
        Text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        isSelected
      />
    </div>
  )
}
