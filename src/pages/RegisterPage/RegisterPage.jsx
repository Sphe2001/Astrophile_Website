import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    re_password: '',
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
    <div class="">
        <h1>RegisterPage</h1>
        
        <div className="text-align">
          <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="first name">First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              
            />
            <Form.Label htmlFor="Last Name">Last Name</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              
            />
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
            <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="re_password"
              aria-describedby="passwordHelpBlock"
              value={formData.re_password}
              onChange={handleChange}
              
            />
            <div> <p> </p></div>
            <Button variant="primary" onSubmit={""}>Sign Up</Button>
          </Form>
          <div>
            Have an account?      
            <Link style={{textDecoration: 'none'}} as={Link} to="/login" exact> Login</Link>
          </div>
        
        </div>
    </div>
    

  )
}
