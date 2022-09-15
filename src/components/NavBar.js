import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Tienda de Productos
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Bebidas</Nav.Link>
          <Nav.Link href="#pricing">Alimentos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;