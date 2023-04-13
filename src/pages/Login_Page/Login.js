import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/pablo-sign-in-1.png';
import logo from '../../assets/logo.svg';
import './login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container fluid className='login-page'>
      <img src={logo} alt='logo' className='logo' />
      <Row>
        <Col className='img-col' sm={12} lg={6}>
          <img src={img} alt='pablo' />
        </Col>

        <Col className='login-form-col' sm={12} lg={6}>
          <div>
            <h3>Welcome!</h3>
            <small>Enter details to login.</small>
          </div>
          <Form className='login-form'>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password" style={{position: 'relative'}}>
              <Form.Label>Password</Form.Label>
              <span className='show-password' onClick={()=>{setShowPassword(!showPassword)}}>Show</span>
              <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" required/>
            </Form.Group>
            <Form.Text className="forgot-password">
              FORGOT PASSWORD?
            </Form.Text>
            <Link to='/users'>
            <Button className='login-button' type="submit">
              LOG IN
            </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login