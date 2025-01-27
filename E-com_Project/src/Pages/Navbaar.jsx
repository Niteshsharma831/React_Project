import { Link } from "react-router-dom"; // Import Link
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function Navbaar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5 fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <h3>
            Apna <span className="text-primary">Code</span>
          </h3>
        </Navbar.Brand>

        {/* Hamburger Menu (Mobile View) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Right Side: Nav Items and Search */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/course">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>

          {/* Search Bar (Responsive) */}
          <InputGroup className="w-auto">
            <FormControl
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-3"
            />
            <Button
              variant="outline-light"
              onClick={handleSearch}
              className="ms-2"
            >
              Search
            </Button>
          </InputGroup>
          <Button className="ms-3">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
