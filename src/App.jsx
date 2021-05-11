import * as React from 'react'
import Button from './Button'
import Pagination from './Pagination'
import Card from './Card'
import './App.css'

export default () => {
  return (
    <div className="App">
      <Pagination currentPage={1} totalPages={34} />
      <Pagination currentPage={2} totalPages={34} />
      <Pagination currentPage={34} totalPages={34} />

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
