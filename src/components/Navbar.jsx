// Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #111;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #f00; // Corvette red!
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Corvette Legacy Thru Current Generation</Logo>
      <NavLinks>
        <a href="/Page1Photo">C1</a>
        <a href="/Page2Photo">C2</a>
        <a href="/Page3Photo">C3</a>
        <a href="/Page4Photo">C4</a>
        <a href="/Page5Photo">C5</a>
        <a href="/Page6Photo">C6</a>
        <a href="/Page7Photo">C7</a>
        <a href="/Page8Photo">C8</a>
        <a href="/Page9Photo">Racing</a>
        <a href="/Page10Photo">Concepts</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
