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
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function NavigationBar() {
  const [page, setpage] = useState('Search...')
  const location = useLocation()

  const setPageName = () => {
    if (location.pathname === '/tvShows') {
      setpage('Search in TV Shows')
    } else if (location.pathname === '/movies') {
      setpage('Search in Movies')
    } else {
      setpage('Search...')
    }
  }

  useEffect(() => {
    setPageName()
  })

  console.log(location)
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
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link">
              <Link to="/tvShows">TV Shows</Link>
            </div>
            <div className="nav-link">
              <Link to="/movies">Movies</Link>
            </div>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder={page}
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
