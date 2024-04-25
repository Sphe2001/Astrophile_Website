import React from 'react'
import Container from 'react-bootstrap/Container';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <BootstrapNavbar expand="lg" className="bg-body-tertiary" >
          <Container>
            <BootstrapNavbar.Brand>
              <h4 style={{ color: "green" }}>Astrophile Nova</h4>
            </BootstrapNavbar.Brand>
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
        </BootstrapNavbar>
  )
}

export default Navbar