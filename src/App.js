
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import CartsPage from './pages/CartsPage';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function App() {
  return (
     
    <Router>
       <Navbar expand="lg" className="bg-body-tertiary" >
          <Container>
            <Navbar.Brand>
              <h4 style={{ color: "green" }}>Astrophile Nova</h4>
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products" exact>
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/login" exact>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" exact>
                Cart
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="container center">
                   <Routes>
                       <Route path="/" element={< HomePage />}/>
                       <Route path="/products" element={< ProductsPage />}/>
                       <Route path="/login" element={< LoginPage />}/>
                       <Route path="/cart" element={< CartsPage />}/>
                   </Routes>
        </div>
    </Router>
  );
}

export default App;
