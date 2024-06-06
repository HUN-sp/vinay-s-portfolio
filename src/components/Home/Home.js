import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Vinay Kumar Chopra</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="home tc" style={{ marginTop: '80px' }}>
        <div className="navy tc">
          <p className="title tc animate__animated animate__zoomInDown">
            <span>Hi, my name is <span className="name">Vinay Kumar Chopra</span></span>
          </p>
          <p className="subTitle tc animate__animated animate__zoomInDown">
            <span>I'm the <span className="profession">Software Developer</span></span>
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;

