// Footer.jsx
import styled from 'styled-components';

const FooterBar = styled.footer`
  background-color: #222;
  color: #ccc;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => (
  <FooterBar>
    &copy; "The 2025 Corvette Software Collection", Optical Automation, LLC. All rights reserved.
  </FooterBar>
);

export default Footer;
