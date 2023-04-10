import React from 'react'
import './userdetails.scss'
import { Col, Row } from 'react-bootstrap'

const UserBluePrint = ({header, arr, details}) => {
  return (
    <Row className='blue-print'>
        <h4>{header}</h4>
        <Row className='second-row'>
     {arr.map((arr, id)=> <Col lg={3}>
        <span>{arr.title}</span>
       {details && <span> {details[id]}</span>} 
       </Col>
     )}
    </Row>
    </Row>
  )
}

export default UserBluePrint