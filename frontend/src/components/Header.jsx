import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarCollapse,
} from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import "../assets/styles/bootstrap.custom.css"; // Import your custom CSS file

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand class="logo-container" style={{ paddingTop: "30px" }}>
              <img
                className="logo"
                src={logo}
                alt="ShopHub"
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  paddingBottom: "25px",
                  marginBottom: "15px",
                }}
              />
              <span
                style={{
                  fontSize: "50px",
                  color: "black",
                  fontWeight: "400",
                }}
              >
                hop Hub
              </span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart
                    class=""
                    style={{ fontSize: "30px", paddingBottom: "10px" }}
                  />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontSize: "30px",
                      fontWeight: "400",
                    }}
                  >
                    Cart
                  </span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <FaUser style={{ fontSize: "30px", paddingBottom: "10px" }} />
                  <span
                    style={{
                      paddingLeft: "10px",
                      fontSize: "30px",
                      fontWeight: "400",
                    }}
                  >
                    Sign In
                  </span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
