import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import '../assets/css/Header.css'

export default function Header2() {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Eliana Nicotra</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav' className='headerLinks'>
            <Nav className='me-auto'>
              <Nav.Link to='#home'>Github</Nav.Link>
              <Nav.Link to='#home'>LinkedIn</Nav.Link>
              <NavDropdown title='Contacto' id='basic-nav-dropdown'>
                <NavDropdown.Item to='#action/3.1'>Contacto</NavDropdown.Item>
                <NavDropdown.Item to='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
