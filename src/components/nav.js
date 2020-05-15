import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Navigation extends React.Component {
    render() { 
        return(
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">my portfolio</Navbar.Brand>

  
  <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#portfolio">portfolio</Nav.Link>
      <Nav.Link href="#contact">contact</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    
    
    
        )
    
     }
     
    }
    export default Navigation;