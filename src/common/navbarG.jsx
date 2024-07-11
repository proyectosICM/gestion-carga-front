import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Logout } from "../hooks/logout";

const NavBarG = () => {
  const navigate = useNavigate();
  const navigation = useNavigate();

  const handleLogout = () => {
    Logout(navigate);
  };
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand style={{ marginLeft: "25px", cursor: "pointer" }} onClick={() => navigation("/")}>
        Gestion de Carga
      </Navbar.Brand>
 
        <Nav> 
          <Nav.Link onClick={() => navigation("/")}>Sedes</Nav.Link>
          <Nav.Link onClick={() => navigation("/")}>Administracion</Nav.Link>
        </Nav>

      <Button onClick={() => handleLogout()} style={{ marginRight: "25px" }} variant="outline-light">
        Cerrar Sesión
      </Button>
    </Navbar>
  );
};

export default NavBarG;
