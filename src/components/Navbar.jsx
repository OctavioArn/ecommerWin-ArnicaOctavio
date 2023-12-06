import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar >
        <Container className='navbar'>
          <img src={logo} alt="logo" href="#" width='110' />
          <Nav className='me-auto'>
            <NavLink className="text-decoration-none text-white px-2" to="/">Home</NavLink>
            <NavLink className="text-decoration-none text-white px-2" to="category/accesorios">Accesorios</NavLink>
            <NavLink className="text-decoration-none text-white px-2" to="category/construccion">Construccion</NavLink>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
);
};

