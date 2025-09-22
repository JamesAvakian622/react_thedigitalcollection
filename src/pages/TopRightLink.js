import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;           // Pins it to the viewport
  top: 1rem;                 // Distance from top of screen
  right: 1rem;               // Distance from right edge
  z-index: 1000;             // Stays above other elements
`;

const StyledLink = styled(Link)`
  width: 1in;                // Fixed width: 1 inch
  background-color: #f00;    // Corvette red!
  color: white;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  display: inline-block;

  &:hover {
    background-color: #c00;
  }
`;

const TopRightLink = () => (
  <Container>
    {/* <StyledLink to="/TheCorvettePhotos">Photos</StyledLink> */}
  </Container>
);

export default TopRightLink;


