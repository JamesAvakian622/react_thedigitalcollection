import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

//import { ThemeToggle } from 'components/ThemeToggle';
// import './newstyles/Page1.jsx'
import styled from 'styled-components';
//import './newstyles/Page1.css'

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000; /* ensures it stays above other content */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  background-color: #333;
  color: white;
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

  li {
    a {
      color: #ffffff;
      text-decoration: none;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.3s ease;

      &:hover {
        border-bottom: 2px solid #ffffff;
      }
    }
  }
`;


export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Cool Jimmy Software</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/components/HomepageIntro">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/components/PressRelease">Press</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/TheCorvetteJournal">Journal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/TheCorvetteReporter">Reporter</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="/pages/TheCorvettePhotos"> Photos</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/pages/TheCorvetteWeb">Web</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/TheCorvetteFuture/">Apps</a>
            </li>
    {/* <li class="nav-item">
              <a class="nav-link" href="/pages/about">About</a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/pages/contact">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://mega-react-vette.vercel.app/Future">Future        .</a>
            </li>

           
          
          </ul>
        </div>
      </div>
    </nav>

  );
}

