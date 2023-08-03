import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import LOGO from '../../assets/headhunting.png'
import './header.style.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="nav-container">
      <Container fluid>
        <Navbar.Brand href="#"> <Image  src={LOGO} rounded className=' logo-image' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-10 my-lg-0 nav-link"  style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Browse Jobs</Nav.Link>
            <Nav.Link href="#" >
              Post a Job
            </Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">software engineers</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Data Scientist</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Product Managers</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Others</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-4 "
              aria-label="Search"
            />
            <Button  variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;