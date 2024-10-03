import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import "./header.scss";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";


function OffcanvasExample() {
  const [show, setShow] = useState(false);

function OffcanvasExample({setScreen}) {

  const expand = "lg";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar key={expand} expand={expand} className="nav">
        <Container fluid>
          <Navbar.Brand href="/">Random Rhapsody</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Random Rhapsody
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              
<Button onClick={() => { handleClose(); setScreen("Home"); }}>Home</Button>
<Button onClick={() => { handleClose(); setScreen("Card"); }}>Card</Button>
<Button onClick={() => { handleClose(); setScreen("Form"); }}>Form</Button>



              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

OffcanvasExample.propTypes = {
  setScreen: PropTypes.func.isRequired, 
};

export default OffcanvasExample;
