import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.div`
  padding: 2rem;
  background-color: #f8f9fa;
  font-family: 'Helvetica Neue', sans-serif;
`;

const Title = styled.h1`
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 2.5rem;
  color: #c00;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
`;

const ProductDescriptions = () => (
  <>
    <img src="/izr1.png" alt="Corvette Hero" />

    <HomepageWrapper>
      <Title>Welcome to the Corvette Digital Products Collection</Title>
      <Subtitle>Celebrating the Chevrolet Corvette, 70+ Years of Speed, Style, and Legacy</Subtitle>
      <Description>
        Whether you're a first-time buyer, seasoned owner, motorsports enthusiast, or Corvette historian, you've just found your ultimate destination. Our three specialized websites—<strong>The Corvette Journal</strong>, <strong>The Corvette Web</strong>, and <strong>The Corvette Reporter</strong>—offer unmatched insights, rare photography, and behind-the-scenes stories that Chevrolet.com and traditional clubs often overlook.
      </Description>
      <Description>
        Explore the Corvette legacy through the lens of ownership, design, and racing. This is more than a car—it's a culture.
      </Description>
      <Description>
        <h2><b>Technology</b></h2>This website is built using the latest web technologies to provide a seamless experience for users. For buyers and owners, The Corvette Journal complements Chevrolet’s official resources by offering real-world insights, supplier connections, and a deeper look into the Corvette legacy.
        <h3><b>1.  Website Pages:</b></h3>
        <ul>
          <li>This website utilizs the latest cutting edge Software Development production technologies. We implement React.js for building user interfaces</li>
          <li>Styled-components for styling</li>
          <li>Framer Motion for animations</li>
        </ul>
        <h3><b>2. Digital Software Products</b></h3>
        <ul>
          <li>The products developed include personal app software for Tablets, CellPhones, and Watches. We use Apple SwiftUI software for the creating of innovative applications.

          </li>
      
          <li>1. Corvette Websites, Responsive Displays on all Computer, Laptop and Desktops, Tablets, and Cell phones</li>
          <li>2. Corvette Photographs, Devices Supported, Apple iPad, iPhone, and Watch</li>
          <li>3. Corvette Quiz, Devices Apple Watch</li>

        </ul>
      </Description>
    </HomepageWrapper>
  </>
);

export default ProductDescriptions;
