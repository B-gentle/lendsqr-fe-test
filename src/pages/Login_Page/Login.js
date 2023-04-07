import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/pablo-sign-in-1.png';
import logo from '../../assets/logo.svg';
import './login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container className='login-page'>
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
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password" style={{position: 'relative'}}>
              <Form.Label>Password</Form.Label>
              <span className='show-password' onClick={()=>{setShowPassword(!showPassword)}}>Show</span>
              <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">
              Forgot PASSWORD?
            </Form.Text>
            <Button className='login-button' type="submit">
              LOG IN
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login