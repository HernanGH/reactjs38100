import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Tienda de Productos
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#bebidas">Bebidas</Nav.Link>
          <Nav.Link href="#alimentos">Alimentos</Nav.Link>
          <Nav.Link href="#contactos">Contactos</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;