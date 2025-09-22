import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: red;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
`;

const Navbar = () => (
  <Nav>
    <Logo>Corvette</Logo>
    <NavLinks>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/gallery">Gallery</StyledLink>
      <StyledLink to="/garage">Garage</StyledLink>
    </NavLinks>
  </Nav>
);

export default Navbar;
