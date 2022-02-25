import React from 'react'
import { Container,Navbar,NavDropdown, Form, FormControl, Nav, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
  return (
    <Container><Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style={{backgroundColor:"#0032a1"}}>
    <Container>
    <Navbar.Brand href="#home">PayCore</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/addCreditApplication">
      <Nav.Link>Credit Apply</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/checkCreditApplicationStatus">
      <Nav.Link>Application Result</Nav.Link>
      </LinkContainer>
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
    </Container>
  </Navbar></Container>
  )
}

export default NavBar