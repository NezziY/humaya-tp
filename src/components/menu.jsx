import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#230e06', padding: '0.5em 1em'}}>
      <Navbar.Brand>
        <Link to="/">
          <img 
          src='../images/HconDulce100x100.png' 
          width="50" 
          height="50"
          alt="Logo Humaya" 
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Humaya</Nav.Link>
          <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
          <Nav.Link as={Link} to="/about">Acerca de nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
