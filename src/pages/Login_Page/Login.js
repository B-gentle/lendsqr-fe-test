import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { login } from '../../redux/reducers/userSlice';
import { useDispatch } from 'react-redux';
import img from '../../assets/pablo-sign-in-1.png';
import logo from '../../assets/logo.svg';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ ...form, isLoggedIn: true }))
    setForm({
      email: '',
      password: '',
    });
    navigate('/users')
  }


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
          <Form className='login-form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email" name='email' value={form.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password" style={{ position: 'relative' }}>
              <Form.Label>Password</Form.Label>
              <span className='show-password' onClick={() => { setShowPassword(!showPassword) }}>Show</span>
              <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" name='password' value={form.password} onChange={handleChange} required />
            </Form.Group>
            <Form.Text className="forgot-password">
              FORGOT PASSWORD?
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