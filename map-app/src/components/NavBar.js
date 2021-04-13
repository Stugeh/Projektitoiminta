import '../App.css';
import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';

const Navigation = ({setPage}) => {
  const landingPage = () => {
    setPage('landing');
  };
  const appPage = () => {
    setPage('app');
  };
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
        Working Title
        </Navbar.Brand>
        <Nav className="#mr-auto">
          <Nav.Link onClick={landingPage}>Home</Nav.Link>
          <Nav.Link onClick={appPage}>App</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};


export default Navigation;
