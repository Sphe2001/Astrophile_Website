
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';


export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/your-backend-endpoint', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div class="login-container">
      <div className="form-container">
        <div className='login-header'>
          <h1>LoginPage</h1>
        </div>
        <div className="input-container">
          <Form>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />

            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              aria-describedby="passwordHelpBlock"
              value={formData.password}
              onChange={handleChange}
              
            />
            <div> <p> </p></div>
            <div className="button-container">
            <Button variant="primary" onSubmit={""}>Login</Button>
            </div>
          </Form>
          <div className='text-container'>
            Don't have an account?      
            <Link style={{textDecoration: 'none'}} as={Link} to="/register" exact>  Sign up</Link>
          </div>
          
        
        </div>
      </div>

    </div>
  )
}
