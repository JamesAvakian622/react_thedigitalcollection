// Footer.jsx
import styled from 'styled-components';
import Nav from './Nav';

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
    <Nav />
    <br /><br />

    <div style={{ margin: '10px 0', color: '#f6efefff', fontSize: '1.28rem' }}>
      <h5> The following tradenames Chevrolet, Corvette, and Chevrolet Corvette, are trademark intellectual property of 
        General Motors Corporation.
      </h5>

      <h5> Cool Jimmy Software, Internet Website Names, and Mobile Apps are tradenames of Optical Automation, LLC</h5>
      <br /><br />
    </div>
    &copy; The 2025 Cool Jimmy Corvette Software Collection, Optical Automation, LLC. All rights reserved.
  </FooterBar>
);

export default Footer;
