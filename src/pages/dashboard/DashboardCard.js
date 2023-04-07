import React from 'react'
import { Card, Col } from 'react-bootstrap'

const DashboardCard = ({icon, title, figures}) => {
  return (
    <Col lg={3} md={6} sm={12} className='mb-5'>
    <Card style={{ width: '15rem', height: '10rem' }}>
      <Card.Body>
        <Card.Title>{icon}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        <Card.Text>
          {figures}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default DashboardCard