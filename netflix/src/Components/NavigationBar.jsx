import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Row,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import logo from '../img/netflix_logo.png'

function NavigationBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="nav-background"
        variant="dark"
      >
        <img src={logo} className="logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My List</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default NavigationBar
