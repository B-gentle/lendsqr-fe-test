import React from 'react'
import { Card } from 'react-bootstrap'

const DashboardCard = ({icon, title, figures}) => {
  return (
    <Card style={{ width: '15rem', height: '10rem' }}>
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>
          {figures}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DashboardCard