import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navLinkStyle } from "./styels";

function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={9}
          className="d-flex justify-content-between"
        >
          <Navbar.Brand className="mx-3">
            <Link to="/" className="text-decoration-none">
              Project
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />
        </Col>
        <Col className="m-auto">
          <Navbar.Collapse>
            <Nav id="basic-navbar">
              <Nav.Link>
                <NavLink to="index" style={navLinkStyle}>
                  Index
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="first" style={navLinkStyle}>
                  First
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="Dashboard" style={navLinkStyle}>
                  Dashboard
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="selector" style={navLinkStyle}>
                  Selector
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="about" style={navLinkStyle}>
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navbars;
