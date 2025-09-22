import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

//import { ThemeToggle } from 'components/ThemeToggle';
// import './newstyles/Page1.jsx'
import styled from 'styled-components';
//import './newstyles/Page1.css'

const Navbar = styled.nav`
  position: sticky;
  margin-bottom: 0% ;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a0a0aff;
  color: white;

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 6px 10px;
  }
`;



// const Logo = styled.a`
//   font-size: 18px;
//   font-weight: bold;
//   color: #0b07e6ff;
// `;
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-left: 0;
  margin: 0;
  

  li {
    a {
      color: #f7f2f2ff;
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.3s ease;
      font-size: 20px;

      &:hover {
        border-bottom: 2px solid #ffffff;
      
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 500px) {
        display: block;
        font-size: 16px;
        padding: 6px 0;
      }
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavContainer = styled.div`
  margin-left: auto;
  display: flex;

`;


export default function Nav() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Cool Jimmy Software</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <NavContainer>
            <NavLinks>
              <li><Link to="./components/HomepageIntro">Home</Link></li>
              <li><Link to="./components/PressRelease">Press</Link></li>
              <li><Link to="./pages/TheCorvetteJournal">Journal</Link></li>
              <li><Link to="./pages/TheCorvetteReporter">Reporter</Link></li>
              <li><Link to="./pages/TheCorvetteWeb">Web</Link></li>
              <li><Link to="./pages/TheCorvetteFuture/">Apps</Link></li>
              <li><Link to="./pages/best">Album</Link></li>
              <li><Link to="./pages/contact">Contact</Link></li>
              <li><Link to="http://mega-react-vette.vercel.app/Future">Future</Link></li>
            </NavLinks>
          </NavContainer>
        </div>
      </div>
    </Navbar>
  );
}
