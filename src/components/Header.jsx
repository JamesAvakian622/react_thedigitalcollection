// Header.jsx
import styled from 'styled-components';
import Nav from './Nav';

const HeaderBar = styled.header`
  background-color: #c00;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: darken(#c00, 10%);
  }

@media (max-width: 350px) {
  font-size: 1rem;
  padding: 1rem;
}


`;

const Header = () => (
  <> <Nav />
    {/* <HeaderBar>The Corvette Digital Software Collection</HeaderBar> */}
   
  </>
);

export default Header;
